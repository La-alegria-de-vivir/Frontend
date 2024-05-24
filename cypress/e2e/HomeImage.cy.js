describe("HomeImage Component", () => {
  it("Should render the Carousel component", () => {
    cy.visit("http://localhost:5173"); // Reemplaza 'ruta_de_tu_aplicacion' con la URL de tu aplicación
    cy.get(".mt-12").find("#carousel-slide").should("exist");
  });
});
