import System from "../pages/system";
import OrgChart from "../pages/org_chart";

export default class AccountLeader {
  static login() {
    System.login("demo@thirtyrock.com", "password")
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
}
