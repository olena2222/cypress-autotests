import HomePage from "../helpers/page objects/HomePage";
describe("Tests for header", () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.navigate();
  });

  it("Check Hillel Auto logo is displayed", () => {
    homePage.header.checkVisibility(homePage.header.itHillelLogo);
    homePage.header.itHillelLogo.click();
    homePage.containUrlCheck("/");
  });

  it("Check Home in header is displayed", () => {
    homePage.header.checkVisibility(homePage.header.homeButton);
    homePage.header.homeButton.click();
    homePage.containUrlCheck("/");
  });

  it("Check About in header is displayed", () => {
    homePage.header.checkVisibility(homePage.header.aboutButton);
    homePage.header.aboutButton.click();
    homePage.header.aboutsection.scrollIntoView();
    homePage.header.checkVisibility(homePage.header.aboutsection);
    homePage.containUrlCheck("/");
  });

  it("Check Contacts in header is displayed", () => {
    homePage.header.checkVisibility(homePage.header.contactsButton);
    homePage.header.contactsButton.click();
    homePage.contactsFooter.contactsSection.scrollIntoView();
    homePage.header.checkVisibility(homePage.contactsFooter.contactsSection);
    cy.url().should("contain", "/");
  });

  it("Check GuestLogin in header is displayed", () => {
    homePage.header.checkVisibility(homePage.header.guestLogin);
    homePage.header.guestLogin.click();
    homePage.containUrlCheck("/panel/garage");
  });

  it("Check Signin in header is displayed", () => {
    homePage.header.checkVisibility(homePage.header.signIn);
    homePage.header.signIn.click();
    homePage.header.checkVisibility(homePage.signin.signInModal);
  });
});
