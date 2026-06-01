export default class {
  _url;
  constructor(url) {
    this._url = url;
  }

  navigate() {
    cy.visit(this._url, {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  }
  containUrlCheck(expectedURL) {
    cy.url().should("contain", expectedURL);
  }

}
