// date_navigation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function log_in(email, password = "password") {
  cy.visit('/')
  cy.get('#sidebar-open').click()
  cy.contains("Log In").click()
  cy.get("#user_email").type(email)
  cy.get("#user_password").type(password)
  return cy.get("input[name='commit']").click()
}

describe('Date Navigation Test', () => {
  it('Updates the date value in all the right places', () => {
    log_in("demo@thirtyrock.com");
    cy.contains('Dashboard')
    cy.get('#sidebar-open').click()
    cy.get("nav").contains("Org Chart").click()

    // expect date input to have today's date
    const today = new Date().toISOString().split("T")[0];
    cy.get("date-navigator input[type='date']").invoke("val").should('eq', today)

    // expect URL to not have any effective date
    cy.location("search").should("be.empty")

    // expect red line at today
    cy.get("path.today-marker").trigger("mouseover")
    // cy.get("text.cursor-date").invoke("text").should("eq", today)

    // expect yellow line at today
    // cy.get("path.selected-date-marker").trigger('mouseover', { force: true })
    // cy.get("text.cursor-date").invoke("text").should("eq", today)

    // click in the input

    // click in timeline
    // cy.get("date-navigator input[type='date']").invoke("val").should('eq', new Date().toISOString().split("T")[0])
    // cy.location("search").should("eq", new Date().toISOString().split("T")[0])
  })
})
