describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should render the contact form", () => {
    cy.get('input[name="firstName"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="phone"]').should("be.visible");
    cy.get('textarea[name="message"]').should("be.visible");
    cy.get('button[type="submit"]').contains("Enviar").should("be.visible");
  });

  it("shows error messages for empty required fields", function () {
    cy.get("form").submit(); 

    cy.get('[name="firstName"]')
      .parent()
      .should("contain", "El nombre es requerido.");
    cy.get('[name="email"]')
      .parent()
      .should("contain", "El correo electrónico es requerido.");
    cy.get('[name="message"]')
      .parent()
      .should("contain", "El mensaje es requerido.");
  });
  it("validates email format", function () {
    cy.get('[name="email"]').type("invalid-email");
    cy.get("form").submit();

    cy.get('[name="email"]')
      .parent()
      .should("contain", "Por favor, introduce un correo electrónico válido.");
  });

  it("validates first name contains only letters", function () {
    cy.get('[name="firstName"]').type("John123");
    cy.get("form").submit();

    cy.get('[name="firstName"]')
      .parent()
      .should("contain", "Solo se permiten letras en el nombre.");
  });

  it("validates phone number format", function () {
    cy.get('[name="phone"]').type("123hola");
    cy.get("form").submit();

    cy.get('[name="phone"]')
      .parent()
      .should("contain", "El teléfono solo puede contener números.");
  });

  it("validates message length", function () {
    cy.get('[name="message"]').type("x".repeat(401));
    cy.get("form").submit();

    cy.get('[name="message"]')
      .parent()
      .should("contain", "El mensaje debe tener menos de 400 caracteres.");
  });

     it("should send the form successfully", () => {
    cy.get('input[name="firstName"]').type("John Doe");
    cy.get('input[name="email"]').type("john@example.com");
    cy.get('input[name="phone"]').type("1234567890");
    cy.get('textarea[name="message"]').type("This is a message");
    cy.get('button[type="submit"]').click();
    cy.get(".text-green-700").should(
      "contain",
      "¡Tu consulta se ha enviado con éxito! Gracias."
    );
  }); 
});
