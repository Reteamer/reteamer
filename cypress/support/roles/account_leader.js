import System from "../pages/system";
import OrgChart from "../pages/org_chart";

export default class AccountLeader {
  static login() {
    System.login("demo@thirtyrock.com", "password")
    cy.contains("Team Chart").should("exist")
  }

  static changeSupervisor(name, newSupervisorName, effectiveDate) {
    OrgChart.changeSupervisor(name, newSupervisorName, effectiveDate)
  }

  static navigateToOrgChart() {
    System.navigateTo("Org Chart")
    cy.contains("Jack Donaghy").should("exist")
  }

  static seesTheSearchParamsChangeTo(expectedQueryString) {
    cy.location("search")
      .should("eq", expectedQueryString)
  }

  static seesTheSearchParamsAreEmpty() {
    this.seesTheSearchParamsChangeTo("")
  }

  static seesTheInputHasDate(expectedDate) {
    cy.get("date-navigator input").invoke("val").should('eq', expectedDate.format("YYYY-MM-DD"))
  }

  static seesTodayMarkedOnTheSlider() {
    cy.get(".today-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover")
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })

    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, new Date(), 2);
    })
  }

  static seesTheSelectedDateIs(expectedDate) {
    cy.get(".selected-date-marker").then($marker => {
      cy.get(".mouse-catcher")
        .trigger("mouseover", {force: true})
        .trigger("mousemove", parseFloat($marker.attr("x1")), 0, {force: true})
    })
    cy.get(".cursor-date").invoke("text").then($text => {
      cy.expectToBeNearDate($text, expectedDate, 2);
    })
  }
}
