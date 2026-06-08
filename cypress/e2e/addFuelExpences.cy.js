import HomePage from "../helpers/Page Objects/HomePage";
import Garage from "../helpers/Page Objects/Garage";
import FuelExpencesPage from "../helpers/Page Objects/FuelExpencesPage";

describe("Garage - Test for Add fuel expences", () => {
  const homePage = new HomePage();
  const garage = new Garage();
  const fuelExpenses = new FuelExpencesPage();
  beforeEach(() => {
    homePage.navigate();
    homePage.header.openLoginModal();
    homePage.signin.logIn(
      Cypress.env("userEmail"),
      Cypress.env("userPassword"),
    );
    garage.addCar.openAddCarModal();
    garage.addCar.addCar("Audi", "TT", "2");
  });
  it("Add fuel expenses-valid case", () => {
    garage.addFuelExpense.openAddFuelExpencesModal();
    garage.addFuelExpense.addFuelExpences(5, 6, 7);
    fuelExpenses.getFuelItem(5, 6, 7);
  });
});
