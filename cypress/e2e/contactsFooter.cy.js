import HomePage from "../helpers/page objects/HomePage";
describe("Tests for header", () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.navigate();
  });

  it("Check facebook in footer is displayed", () => {
    homePage.contactsFooter.facebookButton.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.facebookButton,
    );
    homePage.contactsFooter.removeAttributes(
      homePage.contactsFooter.facebookButton,
      "target",
    );
    homePage.contactsFooter.facebookButton.click();
    homePage.containUrlCheck("facebook");
  });

  it("Check telegram in footer is displayed", () => {
    homePage.contactsFooter.telegramButton.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.telegramButton,
    );
    homePage.contactsFooter.checkHref(
      homePage.contactsFooter.telegramButton,
      "https://t.me/ithillel_kyiv",
    );
  });

  it("Check youtube in footer is displayed", () => {
    homePage.contactsFooter.youtubeButton.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.youtubeButton,
    );
    homePage.contactsFooter.checkHref(
      homePage.contactsFooter.youtubeButton,
      "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1",
    );
  });

  it("Check instagram in footer is displayed", () => {
    homePage.contactsFooter.instagramButton.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.instagramButton,
    );
    homePage.contactsFooter.removeAttributes(
      homePage.contactsFooter.instagramButton,
      "target",
    );
    homePage.contactsFooter.instagramButton.click();
    homePage.containUrlCheck("instagram");
  });

  it("Check linkedin in footer is displayed", () => {
    homePage.contactsFooter.linkedinButton.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.linkedinButton,
    );
    homePage.contactsFooter.removeAttributes(
      homePage.contactsFooter.linkedinButton,
      "target",
    );
    homePage.contactsFooter.linkedinButton.click();
    homePage.containUrlCheck("linkedin");
  });

  it("Check support in footer is displayed", () => {
    homePage.contactsFooter.supportLink.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.supportLink,
    );
    homePage.contactsFooter.checkHref(
      homePage.contactsFooter.supportLink,
      "mailto:developer@ithillel.ua",
    );
  });

  it("Check ithillel.ua in footer is displayed", () => {
    homePage.contactsFooter.itHillelLink.scrollIntoView();
    homePage.contactsFooter.checkVisibility(
      homePage.contactsFooter.itHillelLink,
    );
    homePage.contactsFooter.removeAttributes(
      homePage.contactsFooter.itHillelLink,
      "target",
    );
    homePage.contactsFooter.itHillelLink.click();
    homePage.containUrlCheck("ithillel");
  });
});
