import BaseComponent from "./BaseComponent";

export default class extends BaseComponent{
     get headerButtons() {
    return cy.get("button");
  }
  get itHillelLogo() {
    return cy.get("a.header_logo");
  }
  get homeButton() {
    return cy.get("a.header-link");
  }
  get aboutButton() {
    return this.headerButtons.eq(0)
  }
   get aboutsection() {
    return cy.get("#aboutSection")
  }
  get contactsButton() {
    return this.headerButtons.eq(1)
  }
  get guestLogin() {
    return cy.get("button.-guest")
  }
   get signIn() {
    return cy.get("button.header_signin")
  }
  openLoginModal(){
    this.signIn.click()
  }


}