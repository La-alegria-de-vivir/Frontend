describe("Menu Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Should display the title 'Nuestra carta'", () => {
      cy.get("h2").should("contain", "Nuestra carta");
    });
  
    it("Should display the separators correctly", () => {
      cy.get(".hr1").should("exist");
      cy.get(".hr2").should("exist");
    });
  
    it("Should display the menu table", () => {
      cy.get("table").should("exist");
    });
  
    it("Should display the menu items correctly", () => {
      const menuData = [
        { title: "TOMATE CONFITADO CON BONITO EN ESCABECHE", price: "11" },
        { title: "TORTILLITA DE CAMARÓN DE LA BAHÍA DE CÁDIZ", price: "3" },
        { title: "ENSALADILLA RUSA CON CEBOLLA ENCURTIDA", price: "12" },
        { title: "ENSALADA DE TEMPORADA", price: "14" },
        { title: "SALMOREJO ASADO", price: "6.5" },
        { title: "ANCHOAS DEL CANTÁBRICO", price: "18" },
        { title: "BOQUERONES EN VINAGRE DE VERMUT", price: "16" },
        { title: "MOJAMA DE ATÚN CON ALMENDRAS FRITAS", price: "18" },
        { title: "PANCETA CRUJIENTE A BAJA TEMPERATURA", price: "16" },
        { title: "MILHOJAS DE MOUSSE DE FOIE, QUESO DE CABRA Y MANZANA ASADA", price: "9.5" },
        { title: "HAMBURGUESA ANGUS", price: "15" },
        { title: "CROQUETAS CASERAS", price: "10.5" },
        { title: "TABLA DE GRANDES QUESOS", price: "16.5" },
        { title: "LOMO DE TERNERA 54º CON SALSA DE OLOROSO Y PATATAS", price: "24.5" },
        { title: "TACO DE BACALAO", price: "16" },
        { title: "TIRAMISÚ", price: "6.5" },
        { title: "TARTA DE QUESO", price: "7" },                
      ];
  
      menuData.forEach((item, index) => {
        cy.get("table tr").eq(index).within(() => {
          cy.get("td").eq(0).should("contain", item.title);
          cy.get("td").eq(1).should("contain", item.price + " €");
        });
      });
    });
  });