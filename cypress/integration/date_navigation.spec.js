// date_navigation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import {newISODate} from "../../app/javascript/date_helpers"

describe('Date Navigation Test', () => {
  beforeEach(() => {
    cy.login("demo@thirtyrock.com");
    cy.contains("Dashboard")
    cy.get("#sidebar-open").click()
    cy.get("nav").contains("Org Chart").click()
  })

  it("Initializes the component correctly", () => {
    // expect date input to have today's date
    const today = newISODate();
    cy.get("date-navigator input[type='date']").invoke("val").should('eq', today)

    // it("Leaves today's date off the URL", () => {
    cy.location("search").should("be.empty")

    // it("Marks today's date for reference on the slider", () => {
    cy.wait(500)
    cy.get(".today-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })

    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, new Date());
    })

    // it("Marks today's date as the selected date on the slider", () => {
    cy.get(".selected-date-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })
    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, new Date());
    })
  });

  describe("When clicking on the slider", () => {
    beforeEach(() => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove",100, 0, {force:true})
        .trigger("click",100, 0, {force:true})
    })

    it("Updates the selected date in the component", () => {
      cy.get(".cursor-date").invoke("text").then($selectedDate => {
        cy.get("date-navigator input[type='date']")
          .invoke("val")
          .should('eq', $selectedDate)
        cy.location("search")
          .should("eq", "?effective_date=" + $selectedDate)
      })
    })
  })
})
