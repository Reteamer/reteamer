export default class System {
  static login(email, password) {
    cy.visit('/users/sign_in')
    cy.get("#user_email").type(email)
    cy.get("#user_password").type(password)
    cy.get("input[name='commit']").click()
  }

  static resetDatabase() {
    cy.request('/cypress_rails_reset_state')
  }

  static navigateTo(sidebarText) {
    cy.get("#sidebar-open").click()
    cy.get("nav").contains(sidebarText).click()
  }
}
