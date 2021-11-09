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

    cy.contains("Pick a date for the change to take effect").should("be.visible")
    cy.get("#effective-date-selector input[type='radio'][value='other']").click()
    cy.get("#effective-date-selector input#other_effective_date")
      .type(toISODate(effectiveDate))
      .trigger("change")

    cy.get("button").contains("Commit").click()

  }
}
