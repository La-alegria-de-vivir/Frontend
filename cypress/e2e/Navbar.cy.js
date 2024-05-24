describe('Navbar Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); 
    });
  
    it('should display the logo', () => {
      cy.get('nav img[alt="Logo"]').should('be.visible');
    });
  
    it('should toggle the menu on mobile view', () => {
      cy.viewport('iphone-6');
  
      cy.get('nav ul').first().should('have.class', 'hidden');
  
      cy.get('nav button').click();
  
      cy.get('nav ul').first().should('not.have.class', 'hidden');
      cy.get('nav ul').first().should('have.class', 'flex');
  
      cy.get('nav button').click();
  
      cy.get('nav ul').first().should('have.class', 'hidden');
    });
  
    it('should have correct links in the desktop view', () => {
      const links = [
        { text: 'Inicio', href: '/' },
        { text: 'Carta', href: '/#Carta' },
        { text: 'Reserva', href: '/reservation' },
        { text: 'Nuestra cocina', href: '/#AboutUs' },
        { text: 'Contacto', href: '/#Contacto' },
        { text: 'Grupos', href: '/Grupos' }
      ];
  
      links.forEach(link => {
        cy.get('nav ul').contains(link.text).should('have.attr', 'href', link.href);
      });
    });
  });
  