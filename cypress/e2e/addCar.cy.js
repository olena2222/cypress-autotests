import HomePage from "../helpers/Page Objects/HomePage";
import Garage from "../helpers/Page Objects/Garage";

describe("Garage - UI + API", () => {
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

  it("Interceptor", () => {
    cy.intercept("POST", "/api/cars").as("addCar");

    garage.addCar.openAddCarModal();
    garage.addCar.addCar("Audi", "TT", "3");

    cy.wait("@addCar").then(({ response }) => {
      expect(response.statusCode).to.eq(201);
      const carId = response.body.data.id;
      expect(carId).to.exist;
      cy.request("GET", "/api/cars").then(({ status, body }) => {
        expect(status).to.eq(200);
        const createdCar = body.data.find(
          (car) => car.id === carId,
        );
        expect(createdCar).to.exist;
        expect(createdCar.id).to.eq(carId);
        expect(createdCar.brand).to.eq("Audi");
        expect(createdCar.model).to.eq("TT");
        expect(createdCar.mileage).to.eq(3);
      });
    });
  });

  it("Add expense via API", () => {
    cy.intercept("POST", "/api/cars").as("addCar");
    garage.addCar.openAddCarModal();
    garage.addCar.addCar("Audi", "TT", "3");
    cy.wait("@addCar").then(({ response }) => {
      const carId = response.body.data.id;
      cy.request({
        method: "POST",
        url: "/api/expenses",
        body: {
          carId,
          reportedAt: "2026-06-09",
          mileage: 145,
          liters: 115,
          totalCost: 5000,
        },
      }).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.status).to.eq("ok");
        expect(body.data.carId).to.eq(carId);
        expect(body.data.mileage).to.eq(145);
        expect(body.data.liters).to.eq(115);
        expect(body.data.totalCost).to.eq(5000);
        expect(body.data.id).to.exist;
      });
    });
  });

  it("Validate expence in UI", () => {
    cy.intercept("POST", "/api/cars").as("addCar")
    garage.addCar.openAddCarModal();
    garage.addCar.addCar("Audi", "TT", "3");

    cy.wait("@addCar").then(({ response }) => {
      const carId = response.body.data.id;
      cy.request({
        method: "POST",
        url: "/api/expenses",
        body: {
          carId,
          reportedAt: "2026-06-09",
          mileage: 145,
          liters: 115,
          totalCost: 5000,
        },
      }).then(() => {
        garage.getCarByName("Audi", "TT");
        garage.fuelExpensesLink.click();
        cy.contains("145").should("be.visible");
        cy.contains("115").should("be.visible");
        cy.contains("5000").should("be.visible");
      });
    });
  });
});