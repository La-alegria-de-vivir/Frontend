describe("HomeImage Component", () => {
  it("Should render the Carousel component", () => {
    cy.visit("http://localhost:5173"); 
    cy.get(".mt-12").find("#carousel-slide").should("exist");
  });
});
