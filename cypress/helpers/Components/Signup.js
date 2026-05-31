import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  get signUpButton() {
    return cy.get("button.hero-descriptor_btn");
  }
  get registrationModal() {
    return cy.get(".modal-content");
  }
  get nameField() {
    return cy.get("#signupName");
  }
  get lastNameField() {
    return cy.get("#signupLastName");
  }
  get emailField() {
    return cy.get("#signupEmail");
  }
  get passwordField() {
    return cy.get("#signupPassword");
  }
  get repeatPasswordField() {
    return cy.get("#signupRepeatPassword");
  }
  get registerButton() {
    return cy.get("app-signup-modal .modal-footer button");
  }
}
