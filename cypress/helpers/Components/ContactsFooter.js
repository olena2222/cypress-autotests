import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {

   get contactsSection() {
    return cy.get("#contactsSection")
  } 
  get contactsSocialButtons() {
    return cy.get("a.socials_link");
  }
  get contactsLink() {
    return cy.get("a.contacts_link");
  }
  get facebookButton() {
    return this.contactsSocialButtons.eq(0);
  }
  get telegramButton() {
    return this.contactsSocialButtons.eq(1);
  }
  get youtubeButton() {
    return this.contactsSocialButtons.eq(2);
  }
  get instagramButton() {
    return this.contactsSocialButtons.eq(3);
  }
  get linkedinButton() {
    return this.contactsSocialButtons.eq(4);
  }
  get supportLink() {
    return this.contactsLink.eq(1);
  }
  get itHillelLink() {
    return this.contactsLink.eq(0);
  }

}
