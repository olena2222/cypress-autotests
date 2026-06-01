import BasePage from "./BasePage";
import Signin from "../Components/Signin";
import AddCar from "../Components/AddCar";
import AddFuelExpences from "../Components/AddFuelExpences";
const url = "/";
export default class extends BasePage {
  constructor() {
    super(url);
    this.signin = new Signin();
    this.addCar = new AddCar();
    this.addFuelExpense = new AddFuelExpences();
  }

  get carItem() {
    return cy.get(".car-item");
  }

  getCarByName(brand, model) {
    return this.carItem.last().should("contain", `${brand} ${model}`);
  }
}
