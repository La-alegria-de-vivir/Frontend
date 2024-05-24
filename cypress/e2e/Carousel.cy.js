describe("Carousel Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-4.jpg?alt=media&token=7bc60ba0-367c-4cd4-8ab9-1ace22002ec9",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-2.jpg?alt=media&token=39933a13-707d-48f3-a880-67c0debfdec4",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-3.jpg?alt=media&token=aa0a1c7a-1af2-4771-9644-ca6910bca226",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-5.jpg?alt=media&token=966bef8e-5e3c-4469-8922-060f70bd7c30",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-6.jpg?alt=media&token=ddba7a21-8367-4dbb-ad93-f501a54b20d3",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-7.jpg?alt=media&token=1ffea73d-985e-44f3-91c5-66eec48db10d",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-8.jpg?alt=media&token=b78f19f9-7a31-4eb3-a536-4b5c5bacbd7d",
    "https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Carrousel-1.jpg?alt=media&token=3ad2e858-b812-4a40-becc-1d92b248a6c8",
  ];

  it("should display the first image initially", () => {
    cy.get("#carousel-slide")
      .should("have.css", "background-image")
      .and("include", imageUrls[0]);
  });

  it("should change the image when an indicator is clicked", () => {
    cy.get("#indicators button").eq(2).click();
    cy.get("#carousel-slide")
      .should("have.css", "background-image")
      .and("include", imageUrls[2]);
  });

  it("should cycle through the images automatically", () => {
    cy.wait(7000);
    cy.get("#carousel-slide")
      .should("have.css", "background-image")
      .and("include", imageUrls[1]);
  });

  it("should navigate to the next slide when clicking the right arrow", () => {
    cy.get("#next-slide").click();
    cy.get("#carousel-slide")
      .should("have.css", "background-image")
      .and("include", imageUrls[1]);
  });

  it("should display valid images", () => {
    cy.get("#carousel-slide").each(($slide, index) => {
      cy.wrap($slide)
        .should("have.css", "background-image")
        .and("include", imageUrls[index])
        .then((backgroundImage) => {
          const imageUrl = backgroundImage
            .replace(/url\(['"]?/g, "")
            .replace(/['"]?\)$/g, "");
          cy.request(imageUrl).its("status").should("equal", 200);
        });
    });
  });
});
