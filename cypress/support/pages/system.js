export default class System {
  static login(email, password = "password") {
    cy.login(email, password)
  }
}
