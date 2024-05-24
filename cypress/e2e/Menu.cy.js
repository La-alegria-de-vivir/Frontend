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
        { title: "TORTILLITA DE CAMARÓN DE LA BAHIA DE CADIZ", price: "27.6" },
        { title: "TOMATE CONFITADO CON BONITO EN ESCABECHE", price: "15" },
        { title: "ENSALADILLA RUSA CON CEBOLLA ENCURTIDA", price: "12" },
        { title: "ENSALADA DE TEMPORADA", price: "16.75" },
        { title: "BOQUERONES EN VINAGRE DE VERMUT", price: "16" },
        { title: "ANCHOAS DEL CANTÁBRICO", price: "18" },
        { title: "MOJAMA DE ATÚN CON ALMENDRAS FRITAS", price: "18" },
        { title: "PANCETA CRUJIENTE A BAJA TEMPERATURA", price: "16" },
        { title: "MILHOJAS DE MOUSSE DE FOIE QUESO DE CABRA Y MANZANA ASADA", price: "9" },
        { title: "HAMBURGUESA ANGUS", price: "15" },
        { title: "CROQUETAS CASERAS", price: "10" },
        { title: "TABLA DE GRANDES QUESOS", price: "16" },
        { title: "LOMO DE TERNERA 54º CON SALSA DE OLOROSO Y PATATAS", price: "22" },
        { title: "TACO DE BACALAO", price: "12" },
        { title: "TIRAMISU", price: "8.5" },
        { title: "SALMOREJO ASADO", price: "9.5" },
        { title: "TARTA DE QUESO", price: "7.5" },                
      ];
  
      menuData.forEach((item, index) => {
        cy.get("table tr").eq(index).within(() => {
          cy.get("td").eq(0).should("contain", item.title);
          cy.get("td").eq(1).should("contain", item.price + " €");
        });
      });
    });
  });