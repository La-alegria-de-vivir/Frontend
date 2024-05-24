describe('Pruebas para ReservationSection', () => {
  it('Renderiza correctamente el componente', () => {
    cy.visit('http://localhost:5173'); 

    
    cy.contains('Reservas', { timeout: 10000 }).should('exist').then(() => {
      cy.get('.section-AboutUs-div1 h2', { timeout: 10000 }).then(($h2) => {
        expect($h2.text()).to.include('Reservas');
      });
    });

   
    cy.get('.max-w-xs').should('have.length', 2).then(() => {
      cy.contains('Salón Principal').should('exist');
      cy.contains('Nuestra Terraza').should('exist');
    });


    cy.get('.hr1').should('exist');
    cy.get('.hr2').should('exist');
  });
});
