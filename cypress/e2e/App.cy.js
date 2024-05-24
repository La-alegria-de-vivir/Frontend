describe('App Component', () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173");
    });
  
    it('should load the Home page', () => {
      cy.get("h2").contains("Nuestra cocina").should('be.visible');
    });
  });
  