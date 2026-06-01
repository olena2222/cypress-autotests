//import AddCar from "./AddCar";
import BaseComponent from "./BaseComponent";
export default class extends BaseComponent{

get addFuelExpenseButton() {
    return cy.get(".car_add-expense.btn-success").last();
  }
  get addFuelExpenseModal() {
    return cy.get("app-add-expense-modal");
  }
  get vehicleField() {
    return cy.get("#addExpenseCar");
  }
get reportDate() {
    return cy.get("#addExpenseDate");
  }
  get mileageField() {
    return cy.get("#addExpenseMileage");
  }
  get numberOfLiters() {
    return cy.get("#addExpenseLiters");
  }
   get totalCost() {
    return cy.get("#addExpenseTotalCost");
  }
  get addButton() {
    return cy.get("app-add-expense-modal button.btn-primary");
  }
  get cancelButton() {
    return cy.get("app-add-expense-modal button.btn-secondary");
  }
  openAddFuelExpencesModal() {
    this.addFuelExpenseButton.click();
    this.checkVisibility(this.addFuelExpenseModal)
  }
  addFuelExpences(mileages, liters, totalCost) {
    this.mileageField.clear().type(mileages);
    this.numberOfLiters.type(liters);
    this.totalCost.type(totalCost)
    this.addButton.click();
  }
}