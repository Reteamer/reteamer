// date_navigation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import {newISODate, toISODate} from "../../app/javascript/date_helpers"

function movePiece (number, x, y) {
  cy.get(`.piece-${number}`)
    .trigger('mousedown', { which: 1 })
    .trigger('mousemove', { clientX: x, clientY: y })
    .trigger('mouseup', { force: true })
}

function dropBall() {
  cy.get('.balls img').first()
    .trigger('dragstart')

  cy.get('.hoop')
    .trigger('drop')
}


describe('Org Chart', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state')
    cy.login("demo@thirtyrock.com");
    cy.contains("Dashboard")
    cy.get("#sidebar-open").click()
    cy.get("nav").contains("Org Chart").click()
    cy.contains("Jack Donaghy").should("exist")
  })

  it("Initializes the component correctly", () => {
    cy.window().then(win => {
      cy.get(".node:contains('Jonathan')")
        .trigger('mousedown', {
          which: 1,
          force: true,
          view: win,
        })
      cy.get(".node:contains('Pete')").trigger("mouseover", {
        force: true,
        view: win
      })
      cy.get(".node:contains('Jonathan')")
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

    const twoMonthsFromNow = new Date()
    twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

    cy.get("input[type='date']#other_effective_date")
      .type(toISODate(twoMonthsFromNow))
      .trigger("change")

    cy.get("button").contains("Commit").click()

    cy.location("search")
      .should("eq", "?effective_date=" + toISODate(twoMonthsFromNow))
  });
})
