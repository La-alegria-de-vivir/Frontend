describe("Group Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); 
  });

  it('renders the group component with hr1 and hr2 lines', () => {
    cy.get('.hr1').should('exist');
    cy.get('.hr2').should('exist');
  });
});
