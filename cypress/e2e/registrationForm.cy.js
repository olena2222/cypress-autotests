import HomePage from "../helpers/page objects/HomePage";

describe("Registration form", () => {
  const homePage = new HomePage();
  const redBorder = "rgb(220, 53, 69)";

  beforeEach(() => {
    homePage.navigate();
    homePage.signup.checkVisibility(homePage.signup.signUpButton);
    homePage.signup.signUpButton.click();
    homePage.signup.checkVisibility(homePage.signup.registrationModal);
  });

  // tests for name
  it("Check Name field is displayed", () => {
    homePage.signup.checkLabel("Name");
    homePage.signup.checkVisibility(homePage.signup.nameField);
  });

  it("Check empty field- name required", () => {
    homePage.signup.validateEmptyField(homePage.signup.nameField);
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Name required"),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check wrong data- name invalid -cyrylic", () => {
    homePage.signup.nameField.type("пп").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check wrong data- name invalid -numbers", () => {
    homePage.signup.nameField.type("123").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check wrong data- name invalid -special characters", () => {
    homePage.signup.nameField.type("Olena@").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check wrong length name- 1 symbol", () => {
    homePage.signup.nameField.type("k").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Name has to be from 2 to 20 characters long",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check wrong length name- 21 symbol", () => {
    homePage.signup.nameField.type("kkkkkkkkkkkkkkkkkkkkk").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Name has to be from 2 to 20 characters long",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.nameField, redBorder);
  });

  it("Check valid case name - 2 english symbol", () => {
    homePage.signup.nameField.type("ol").blur();
    homePage.signup.nameField.should("have.value", "ol");
    cy.get(".invalid-feedback").should("not.exist");
  });

  it("Check valid case name - 20 english symbol", () => {
    homePage.signup.nameField.type("olenaolenaolenaolena").blur();
    homePage.signup.nameField.should("have.value", "olenaolenaolenaolena");
    cy.get(".invalid-feedback").should("not.exist");
  });

  // tests for last name
  it("Check Last Name is displayed", () => {
    homePage.signup.checkLabel("Last name");
    homePage.signup.checkVisibility(homePage.signup.lastNameField);
  });

  it("Check empty field- last name required", () => {
    homePage.signup.validateEmptyField(homePage.signup.lastNameField);
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Last name required"),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check wrong data- last name invalid - cyrylic", () => {
    homePage.signup.lastNameField.type("лл").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Last name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check wrong data- last name invalid -numbers", () => {
    homePage.signup.lastNameField.type("1234").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Last name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check wrong data- last name invalid -special characters", () => {
    homePage.signup.lastNameField.type("Olena@").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Last name is invalid"),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check wrong length last name - 1 symbol", () => {
    homePage.signup.lastNameField.type("k").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Last name has to be from 2 to 20 characters long",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check wrong length last name- 21 symbol", () => {
    homePage.signup.lastNameField.type("kkkkkkkkkkkkkkkkkkkkk").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Last name has to be from 2 to 20 characters long",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.lastNameField, redBorder);
  });

  it("Check valid case - 2 english symbol", () => {
    homePage.signup.lastNameField.type("ol").blur();
    homePage.signup.lastNameField.should("have.value", "ol");
    cy.get(".invalid-feedback").should("not.exist");
  });

  it("Check valid case - 20 english symbol", () => {
    homePage.signup.lastNameField.type("testteattesttesttest").blur();
    homePage.signup.lastNameField.should("have.value", "testteattesttesttest");
    cy.get(".invalid-feedback").should("not.exist");
  });

  // tests for email
  it("Check email is displayed", () => {
    homePage.signup.checkLabel("Email");
    homePage.signup.checkVisibility(homePage.signup.emailField);
  });

  it("Check empty field- email required", () => {
    homePage.signup.validateEmptyField(homePage.signup.emailField);
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Email required"),
    );
    homePage.signup.checkBorderColor(homePage.signup.emailField, redBorder);
  });

  it("Check email incorrect -without @", () => {
    homePage.signup.emailField.type("olenagmail.com").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Email is incorrect"),
    );
    homePage.signup.checkBorderColor(homePage.signup.emailField, redBorder);
  });

  it("Check email incorrect -without domain", () => {
    homePage.signup.emailField.type("olena@").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Email is incorrect"),
    );
    homePage.signup.checkBorderColor(homePage.signup.emailField, redBorder);
  });

  it("Check email incorrect -without username on beginning", () => {
    homePage.signup.emailField.type("@gmail.com").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Email is incorrect"),
    );
    homePage.signup.checkBorderColor(homePage.signup.emailField, redBorder);
  });

  it("Check valid email", () => {
    homePage.signup.emailField.type("mitak66154@marineso.com").blur();
    homePage.signup.emailField.should("have.value", "mitak66154@marineso.com");
    cy.get(".invalid-feedback").should("not.exist");
  });

  // tests for password
  it("Check password is displayed", () => {
    homePage.signup.checkLabel("Password");
    homePage.signup.checkVisibility(homePage.signup.passwordField);
  });

  it("Check empty field- password required", () => {
    homePage.signup.validateEmptyField(homePage.signup.passwordField);
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Password required"),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check wrong data password 7 symbols", () => {
    homePage.signup.passwordField.type("ol1@sd3").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check wrong data password 16 symbols", () => {
    homePage.signup.passwordField.type("ol1@sd314azwedsd").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check wrong data password without integer", () => {
    homePage.signup.passwordField.type("oooooooO").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check wrong data password without capital letter", () => {
    homePage.signup.passwordField.type("ooooooo1").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check wrong data password without small letter", () => {
    homePage.signup.passwordField.type("OOOOOOO1").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    );
    homePage.signup.checkBorderColor(homePage.signup.passwordField, redBorder);
  });

  it("Check valid case - 8 symbols", () => {
    homePage.signup.passwordField.type("olOl0125").blur();
    homePage.signup.passwordField.should("have.value", "olOl0125");
    cy.get(".invalid-feedback").should("not.exist");
  });

  it("Check valid case - 15 symbols", () => {
    homePage.signup.passwordField.type("olOl01251245Kjh").blur();
    homePage.signup.passwordField.should("have.value", "olOl01251245Kjh");
    cy.get(".invalid-feedback").should("not.exist");
  });

  // tests for reenter password
  it("Check reenter password is displayed", () => {
    homePage.signup.checkLabel("Re-enter password");
    homePage.signup.checkVisibility(homePage.signup.repeatPasswordField);
  });

  it("Check empty field- reenter password required", () => {
    homePage.signup.validateEmptyField(homePage.signup.repeatPasswordField);
    homePage.signup.checkVisibility(
      homePage.signup.checkError(
        ".invalid-feedback",
        "Re-enter password required",
      ),
    );
    homePage.signup.checkBorderColor(
      homePage.signup.repeatPasswordField,
      redBorder,
    );
  });

  it("Check passwords not match", () => {
    homePage.signup.passwordField.type("olOl1234").blur();
    homePage.signup.repeatPasswordField.type("olOl1235").blur();
    homePage.signup.checkVisibility(
      homePage.signup.checkError(".invalid-feedback", "Passwords do not match"),
    );
    homePage.signup.checkBorderColor(
      homePage.signup.repeatPasswordField,
      redBorder,
    );
  });

  it("Check passwords match", () => {
    homePage.signup.passwordField.type("olOl1234").blur();
    homePage.signup.repeatPasswordField.type("olOl1234").blur();
    cy.get(".invalid-feedback").should("not.exist");
  });

  // tests for register button
  it("Check register not active if all fields empty", () => {
    homePage.signup.checkVisibility(homePage.signup.registerButton);
    homePage.signup.registerButton.should("be.disabled");
  });

  it("Check register not active if data invalid", () => {
    homePage.signup.nameField.type("o");
    homePage.signup.lastNameField.type("oo");
    homePage.signup.emailField.type("example.com");
    homePage.signup.passwordField.type("ol123456");
    homePage.signup.repeatPasswordField.type("ol123456");
    homePage.signup.registerButton.should("be.disabled");
  });

  it("Check register valid case", () => {
    homePage.signup.nameField.type("ol");
    homePage.signup.lastNameField.type("test");
    homePage.signup.emailField.type("kamoko4666@googxs.com");
    homePage.signup.passwordField.type("Ool123456");
    homePage.signup.repeatPasswordField.type("Ool123456");
    homePage.signup.registerButton.should("not.be.disabled").click();
    homePage.signup.registrationModal.should("not.exist");
  });
});
