import HomePage from "../helpers/page objects/HomePage";
describe("Test for user login", () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.navigate();
  });
  it("Login test", () => {
    homePage.header.openLoginModal();
    homePage.header.checkVisibility(homePage.signin.signInModal);
    homePage.signin.logIn("kamoko4666@googxs.com", "Ool123456");
    homePage.containUrlCheck("panel/garage");
  });
});
