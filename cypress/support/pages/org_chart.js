import {toISODate} from "../../../app/javascript/date_helpers";

export default class OrgChart {
  static changeSupervisor(name, newSupervisorName, effectiveDate) {
    cy.window().then(win => {
      cy.get(`.node:contains('${name}')`)
        .trigger('mousedown', {
          which: 1,
          force: true,
          view: win,
        })
      cy.get(`.node:contains('${newSupervisorName}')`)
        .trigger("mouseover", {
          force: true,
          view: win
        })
      cy.get(`.node:contains('${name}')`)
        .trigger('mousemove', {
          clientX: -100,
          clientY: 30,
          force: true,
        })
        .trigger('mouseup', {
          force: true,
          view: win,
        });
    });

    cy.get("input[type='radio'][value='other']").click()

    cy.get("input[type='date']#other_effective_date")
      .type(toISODate(effectiveDate))
      .trigger("change")

    cy.get("button").contains("Commit").click()

  }
}
