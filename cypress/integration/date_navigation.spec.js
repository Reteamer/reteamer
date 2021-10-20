// date_navigation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import {newISODate} from "../../app/javascript/date_helpers"

function log_in(email, password = "password") {
  cy.visit('/')
  cy.get('#sidebar-open').click()
  cy.contains("Log In").click()
  cy.get("#user_email").type(email)
  cy.get("#user_password").type(password)
  return cy.get("input[name='commit']").click()
}

function expectToBeNearDate($text, expectedDate) {
  // Cypress doesn't seem to pass decimal values to the MouseEvent object
  // that it creates, so we can't assert the date is equal, only that we're
  // pretty close
  const oneDayAgo = new Date(expectedDate)
  oneDayAgo.setDate(expectedDate.getDate() - 1);
  const oneDayFromNow = new Date(expectedDate)
  oneDayFromNow.setDate(expectedDate.getDate() + 1);

  expect(new Date($text)).to.be.greaterThan(oneDayAgo)
  expect(new Date($text)).to.be.lessThan(oneDayFromNow)
}

describe('Date Navigation Test', () => {
  it('Updates the date value in all the right places', () => {
    log_in("demo@thirtyrock.com");
    cy.contains('Dashboard')
    cy.get('#sidebar-open').click()
    cy.get("nav").contains("Org Chart").click()

    // expect date input to have today's date
    const today = newISODate();
    cy.get("date-navigator input[type='date']").invoke("val").should('eq', today)

    // expect URL to not have any effective date
    cy.location("search").should("be.empty")

    // expect red line at today
    cy.wait(500)
    cy.get(".today-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force:true})
    })

    cy.get(".cursor-date").invoke("text").then($text => {
      expectToBeNearDate($text, new Date());
    })

    // expect yellow line at selected date (today)
    cy.get(".selected-date-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force:true})
    })
    cy.get(".cursor-date").invoke("text").then($text => {
      expectToBeNearDate($text, new Date());
    })

    // click in the input

    // click in timeline
    cy.get(".mouse-catcher")
      .trigger("mouseover")
      .trigger("mousemove",100, 0, {force:true})
      .trigger("click",100, 0, {force:true})

    cy.get(".cursor-date").invoke("text").then($selectedDate => {
      cy.get("date-navigator input[type='date']")
        .invoke("val")
        .should('eq', $selectedDate)
      cy.location("search")
        .should("eq", "?effective_date=" + $selectedDate)
    })

  })
})
