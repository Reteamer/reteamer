// date_navigation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import {newISODate, toISODate} from "../../app/javascript/date_helpers"
import AccountLeader from "../support/roles/account_leader";
import dayjs from "dayjs";
import System from "../support/pages/system";

describe('Date Navigation Test', () => {
  beforeEach(() => {
    System.resetDatabase()
    AccountLeader.login()
    AccountLeader.navigateToOrgChart()
  })

  it("Initializes the component correctly", () => {
    // expect date input to have today's date
    const today = newISODate();
    cy.get("date-navigator input[type='date']").invoke("val").should('eq', today)

    // it("Leaves today's date off the URL", () => {
    cy.location("search").should("be.empty")

    // it("Marks today's date for reference on the slider", () => {
    cy.get(".today-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })

    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, new Date(), 2);
    })

    // it("Marks today's date as the selected date on the slider", () => {
    cy.get(".selected-date-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })
    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, new Date(), 2);
    })
  });

  describe("When clicking on the slider", () => {
    beforeEach(() => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove",100, 0, {force:true})
        .trigger("click",100, 0, {force:true})
      cy.get(".cursor-date").invoke("text").as('expectedSelectedDate')
    })

    it("Updates the selected date in the component and the URL", function() {
      cy.get("date-navigator input[type='date']")
        .invoke("val")
        .should('eq', this.expectedSelectedDate)
      cy.location("search")
        .should("eq", "?effective_date=" + this.expectedSelectedDate)
    })

    it("Updates the other components", function() {
      cy.contains("Howard Jorgensen").should("exist")
    })
  })

  describe("When changing the date input", () => {
    const twoMonthsFromNow = dayjs().add(2, "months")

    beforeEach(() => {
      cy.get("date-navigator input[type='date']")
        .type(toISODate(twoMonthsFromNow))
        .trigger("change")
    })

    it("Updates the selected date in the component and the URL", function() {
      cy.get("date-navigator input[type='date']")
        .invoke("val")
        .should('eq', toISODate(twoMonthsFromNow))
      AccountLeader.seesTheSearchParamsChangeTo(`?effective_date=${toISODate(twoMonthsFromNow)}`)
    })

    it("Updates the other components", function() {
      cy.contains("Howard Jorgensen").should("exist")
    })
  })
})
