describe('Reservation Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/reservation'); 
    });
  
    it('should render the booking form', () => {
      cy.get('form').should('exist'); 
    });
  
    it('should fill out the booking form', () => {
      
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="date"]').type('2024-05-30');
  
      
      cy.get('input[name="name"]').should('have.value', 'John Doe');
      cy.get('input[name="date"]').should('have.value', '2024-05-30');
  
      
      cy.get('button[type="submit"]').click();
  
    });
  });
  