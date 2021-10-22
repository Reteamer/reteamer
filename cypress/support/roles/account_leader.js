import System from "../pages/system";
import OrgChart from "../pages/org_chart";

export default class AccountLeader {
  static login() {
    System.login("demo@thirtyrock.com")
  }

  static changeSupervisor(name, newSupervisorName, effectiveDate) {
    OrgChart.changeSupervisor(name, newSupervisorName, effectiveDate)
  }
}
