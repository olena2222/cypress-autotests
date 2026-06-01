import BaseComponent from "./BaseComponent";
export default class extends BaseComponent {
  get addCarButton() {
    return cy.get(".panel-page_heading button");
  }
  get addCarModal() {
    return cy.get("app-add-car-modal");
  }
  get brandField() {
    return cy.get("#addCarBrand");
  }
  get modelField() {
    return cy.get("#addCarModel");
  }
  get mileageField() {
    return cy.get("#addCarMileage");
  }
  get addButton() {
    return cy.get("app-add-car-modal button.btn-primary");
  }
  get cancelButton() { return cy.get("app-add-car-modal button.btn-secondary");
  }
  openAddCarModal() {
    this.addCarButton.click();
    this.checkVisibility(this.addCarModal)
  }
  addCar(brand, model, mileage) {
    this.brandField.select(brand);
    this.modelField.select(model);
    this.mileageField.type(mileage);
    this.addButton.click();
  }


}