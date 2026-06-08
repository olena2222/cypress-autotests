import HomePage from "../helpers/Page Objects/HomePage";
import Garage from "../helpers/Page Objects/Garage";

describe("Garage - Test for Add car", () => {
  const homePage = new HomePage();
  const garage = new Garage();
  beforeEach(() => {
    homePage.navigate();
    homePage.header.openLoginModal();
    homePage.signin.logIn(
      Cypress.env("userEmail"),
      Cypress.env("userPassword"),
    );
  });
  it("Add car - valid case", () => {
    garage.addCar.openAddCarModal();
    garage.addCar.addCar("Audi", "TT", "2");
    garage.getCarByName("Audi", "TT");
  });
});
