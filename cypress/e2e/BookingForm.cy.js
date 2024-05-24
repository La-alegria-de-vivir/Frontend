describe("Booking Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/reservation");
  });

  it("Should display the message for groups larger than 10 people", () => {
    cy.get('h2').contains("Hacer Reservas");
  });
});
