describe('Grid Component', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://backend-la-alegria-de-vivir.onrender.com/api/menu/getmenu', {
        statusCode: 200,
        body: {
          menu: [
            {
              _id: '1',
              image: 'https://via.placeholder.com/150',
              title: 'Plato 1',
              description: 'Descripción del Plato 1',
              ingredients: ['Ingrediente 1', 'Ingrediente 2']
            },
            {
              _id: '2',
              image: 'https://via.placeholder.com/150',
              title: 'Plato 2',
              description: 'Descripción del Plato 2',
              ingredients: ['Ingrediente 1', 'Ingrediente 2']
            },
            {
              _id: '3',
              image: 'https://via.placeholder.com/150',
              title: 'Plato 3',
              description: 'Descripción del Plato 3',
              ingredients: ['Ingrediente 1', 'Ingrediente 2']
            },
          ]
        }
      }).as('getMenu');
  
      cy.visit('http://localhost:5173');
    });
  
    it('should display the grid with images and titles', () => {
      cy.wait('@getMenu');
  
      cy.get('.grid .relative').should('have.length', 3);
      cy.contains('Plato 1').should('be.visible');
      cy.contains('Plato 2').should('be.visible');
      cy.contains('Plato 3').should('be.visible');
    });
  
    it('should paginate correctly', () => {
      cy.wait('@getMenu');
  
      cy.contains('Plato 1').should('be.visible');
      cy.contains('Plato 2').should('be.visible');
      cy.contains('Plato 3').should('be.visible');
    });
  });
  