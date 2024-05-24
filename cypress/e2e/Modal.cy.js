describe('Pruebas para Modal', () => {
  it('Muestra el modal al hacer clic en una imagen', () => {
    cy.visit('http://localhost:5173');

   
    cy.wait(2000); 


    cy.get('.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.gap-4.mt-4 > :nth-child(1)').click();


    cy.get('.fixed.inset-0.bg-gray-800.bg-opacity-75.flex.items-center.justify-center.z-50').should('exist');

   
  });
});
