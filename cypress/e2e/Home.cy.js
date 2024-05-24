describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });

    it('should load the logo on the Home page', () => {
        cy.get('.text-3xl img').should('exist');
    });
  });