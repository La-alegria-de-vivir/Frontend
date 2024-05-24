describe("AboutUs Page", () => {
    beforeEach(() => {
      cy.visit("https://develop--alegriadevivir99.netlify.app/#AboutUs");
    });
    it("Should display the title", () => {
      cy.get("h2").contains("Nuestra cocina");
    });
  });
  