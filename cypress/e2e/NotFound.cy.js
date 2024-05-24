describe("NotFound Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/not-found");
    });
  
    it("Should display the error message", () => {
      cy.get("p").should("contain", "Está página no está en nuestro menú");
    });
  
    it("Should display the image", () => {
      cy.get("img").eq(1).should("have.attr", "src", "/src/assets/image-n.png");
      cy.get("img").eq(1).should("have.attr", "alt", "imagen");
    });
  
    it("Should link to the home page", () => {
      cy.get("a").should("have.attr", "href", "/");
    });
  
    it("Should have the correct CSS class", () => {
      cy.get("main").should("have.class", "main-not-found");
    });
  
    it("Should have the correct structure", () => {
      cy.get("main").should("contain", "p");
      cy.get("main").should("contain", "a");
      cy.get("main p").should("be.visible");
      cy.get("main a").should("be.visible");
    });
  
    it("Should navigate to the home page when clicking the image", () => {
      cy.get("img").eq(1).click();
      cy.url().should("eq", "http://localhost:5173/");
    });
  
    it("Should have the correct alt text for accessibility", () => {
      cy.get("img").should("have.attr", "alt").and("not.be.empty");
    });
  
    it("Should have the correct image source", () => {
      cy.get("img").eq(1).should("have.attr", "src").and("include", "image-n.png");
    });
  
    it("Should have the correct link to the home page", () => {
      cy.get("a").should("have.attr", "href", "/");
    });
  
    it("Should have the correct CSS styles applied", () => {
      cy.get("main").should("have.css", "display", "flex");
      cy.get("main").should("have.css", "flex-direction", "column");
      cy.get("main").should("have.css", "align-items", "center");
      cy.get("main").should("have.css", "justify-content", "normal");
      cy.get("main").should("have.css", "height", "528px");
    });
  });