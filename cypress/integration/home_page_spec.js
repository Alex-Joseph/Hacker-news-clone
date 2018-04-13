describe("The Home Page", function() {
  it("clicking the brand navigates to home", function() {
    cy.visit("http://localhost:3000/")

    cy.contains('Hacker News').click()

    cy.url().should("eq", "http://localhost:3000/")
  })
})

describe("Checking for 30 stories", function() {
  it("initial load of home page has 30 stories", function() {
    cy.visit("http://localhost:3000/")

    cy.get(".story").should('have.length', 30)
  })
})

describe("Loads new stories", function() {
  it("on scrolling to the bottom new stories are added", function() {
    cy.visit("http://localhost:3000/")

    cy.scrollTo("bottom")

    cy.get(".story").children().should('have.length', 60)
  })
})
