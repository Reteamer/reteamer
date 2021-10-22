import { toISODate} from "../../app/javascript/date_helpers"
import AccountLeader from "../support/roles/account_leader";

describe('Org Chart', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state')
    AccountLeader.login()
    cy.contains("Dashboard")
    cy.get("#sidebar-open").click()
    cy.get("nav").contains("Org Chart").click()
    cy.contains("Jack Donaghy").should("exist")
  })

  it("Initializes the component correctly", () => {
    const twoMonthsFromNow = new Date()
    twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

    AccountLeader.changeSupervisor("Jonathan", "Pete", twoMonthsFromNow)
    cy.location("search")
      .should("eq", "?effective_date=" + toISODate(twoMonthsFromNow))
  });
})
