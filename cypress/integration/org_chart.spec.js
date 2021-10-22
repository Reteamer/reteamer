import { toISODate} from "../../app/javascript/date_helpers"
import AccountLeader from "../support/roles/account_leader";
import System from "../support/pages/system";
import dayjs from "dayjs";

describe('Org Chart', () => {
  beforeEach(() => {
    System.resetDatabase()
    AccountLeader.login()
    AccountLeader.navigateToOrgChart()
  })

  it("Lets the AccountLeader move people around to new supervisors", () => {
    const twoMonthsFromNow = dayjs().add(2, 'months')
    AccountLeader.changeSupervisor("Jonathan", "Pete", twoMonthsFromNow)
    AccountLeader.seesTheSearchParamsChangeTo(`?effective_date=${toISODate(twoMonthsFromNow)}`)
  });
})
