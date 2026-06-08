import BasePage from "./BasePage";
import Signin from "../Components/Signin";
import AddFuelExpences from "../Components/AddFuelExpences";
const url = "/";
export default class extends BasePage {
  constructor() {
    super(url);
    this.signin = new Signin();
    this.addFuelExpense = new AddFuelExpences();
  }

  get fuelExpencesItem() {
    return cy.get("app-fuel-expenses");
  }

  getFuelItem(mileage, liters, totalCost) {
    this.fuelExpencesItem.last().should("contain", `${mileage}`);
    this.fuelExpencesItem.last().should("contain", `${liters}L`);
    this.fuelExpencesItem.last().should("contain", `${totalCost} USD`);
  }
}
