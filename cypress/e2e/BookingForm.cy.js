describe("Booking Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/reservation");
  });

  it("Should display error for invalid phone number", () => {
    cy.get("#phoneNumber").type("123");
    cy.get("button[type='submit']").click();
    cy.contains("El número de teléfono debe contener 9 dígitos numéricos.").should("be.visible");
  });

  it("Should allow submission with valid data", () => {
    cy.get("#name").type("Juan Pérez");
    cy.get("#people").clear().type("5");
    cy.get("#phoneNumber").type("123456789");
    cy.get("#place").select("Sala");
    cy.get("#date").type("2023-12-31");
    cy.get("#hour").select("12:30");

    cy.get("button[type='submit']").click();

    cy.contains("Resumen de la reserva").should("be.visible");
    cy.contains("¡Reserva realizada con éxito!").should("be.visible");
  });

  it("Should display an alert when the maximum number of people is exceeded", () => {
    cy.get("#name").type("Juan Pérez");
    cy.get("#people").clear().type("11");
    cy.get("#phoneNumber").type("123456789");
    cy.get("#place").select("Sala");
    cy.get("#date").type("2023-12-31");
    cy.get("#hour").select("12:30");

    cy.get("button[type='submit']").click();

    cy.contains("El número máximo de comensales es 10").should("be.visible");
  });

  it("Should display an alert for reservations on Monday or Tuesday", () => {
    cy.get("#name").type("Juan Pérez");
    cy.get("#people").clear().type("5");
    cy.get("#phoneNumber").type("123456789");
    cy.get("#place").select("Sala");
    cy.get("#date").type("2023-12-25");
    cy.get("#hour").select("12:30");

    cy.get("button[type='submit']").click();

    cy.contains("No se pueden hacer reservas los lunes y martes.").should("be.visible");
  });
});
