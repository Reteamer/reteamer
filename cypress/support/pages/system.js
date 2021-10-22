export default class System {
  static login(email, password) {
    cy.visit('/')
    cy.get('#sidebar-open').click()
    cy.contains("Log In").click()
    cy.get("#user_email").type(email)
    cy.get("#user_password").type(password)
    cy.get("input[name='commit']").click()
    cy.contains("Dashboard")

  }

  static resetDatabase() {
    cy.request('/cypress_rails_reset_state')
  }

  static navigateTo(sidebarText) {
    cy.get("#sidebar-open").click()
    cy.get("nav").contains(sidebarText).click()
  }
}
