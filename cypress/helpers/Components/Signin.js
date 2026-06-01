import BaseComponent from "./BaseComponent";
export default class {
  get signInModal() {
    return cy.get("app-signin-modal");
  }
  get emailField() {
    return cy.get("#signinEmail");
  }
  get passwordField() {
    return cy.get("#signinPassword");
  }

  get loginButton() {
    return cy.get(".modal-footer button").eq(1);
  }

  logIn(email, password) {
    this.emailField.type(Cypress.env("userEmail"));
    this.passwordField.type((Cypress.env("userPassword")), { sensitive: true });
    this.loginButton.click();
  }
}
