describe("Grid Component Pagination Navigation", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Should render pagination buttons", () => {
      cy.get('button').contains("Anterior").should('exist');
      cy.get('button').contains("Siguiente").should('exist');
    });
  
    it("Should navigate to the next page on 'Siguiente' button click", () => {
      cy.get('button').contains("Siguiente").click();
      cy.wait(1000); 
      cy.get('.grid').should('exist'); 
    });
  
    it("Should navigate to the previous page on 'Anterior' button click", () => {
      cy.get('button').contains("Siguiente").click();
      cy.wait(1000); 
      cy.get('button').contains("Anterior").click({ force: true }); 
      cy.wait(1000); 
      cy.get('.grid').should('exist'); 
    });
  });
  