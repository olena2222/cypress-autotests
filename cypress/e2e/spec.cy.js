describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Check Hillel Auto header is displayed", () => {
    cy.get("a.header_logo").should("be.visible");
    cy.get("a.header_logo").click;
    cy.url().should("contain", "/");
  });

  it("Check Home in header is displayed", () => {
    cy.get("a.header-link").should("be.visible");
    cy.get("a.header-link").contains("Home");
    cy.get("a.header-link").click;
    cy.url().should("contain", "/");
  });

  it("Check About in header is displayed", () => {
    cy.get("button").eq(0).should("be.visible");
    cy.contains("button", "About").click();
    cy.get("#aboutSection").scrollIntoView().should("be.visible");
    cy.url().should("contain", "/");
  });

  it("Check Contacts in header is displayed", () => {
    cy.get("button").eq(1).should("be.visible");
    cy.contains("button", "Contacts").click();
    cy.get("#contactsSection").scrollIntoView().should("be.visible");
    cy.url().should("contain", "/");
  });

  it("Check GuestLogin in header is displayed", () => {
    cy.get("button.-guest").should("be.visible");
    cy.contains("button", "Guest log in").click();
    cy.url().should("contain", "/panel/garage");
  });

  it("Check Signin in header is displayed", () => {
    cy.get("button.header_signin").should("be.visible");
    cy.contains("button", "Sign In").click();
    cy.get("app-signin-modal").should("be.visible");
  });

  it("Check facebook in footer is displayed", () => {
    cy.get("a.socials_link").eq(0).scrollIntoView().should("be.visible");
    cy.get("a.socials_link").eq(0).invoke("removeAttr", "target").click();
    cy.url().should("contain", "facebook");
  });

  it("Check telegram in footer is displayed", () => {
    cy.get("a.socials_link").eq(1).scrollIntoView().should("be.visible");
    cy.get("a.socials_link")
      .eq(1)
      .should("have.attr", "href", "https://t.me/ithillel_kyiv");
  });

  it("Check youtube in footer is displayed", () => {
    cy.get("a.socials_link").eq(2).scrollIntoView().should("be.visible");
    cy.get("a.socials_link")
      .eq(2)
      .should(
        "have.attr",
        "href",
        "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1",
      );
  });

  it("Check instagram in footer is displayed", () => {
    cy.get("a.socials_link").eq(3).scrollIntoView().should("be.visible");
    cy.get("a.socials_link").eq(3).invoke("removeAttr", "target").click();
    cy.url().should("contain", "instagram");
  });

  it("Check linkedin in footer is displayed", () => {
    cy.get("a.socials_link").eq(4).scrollIntoView().should("be.visible");
    cy.get("a.socials_link").eq(4).invoke("removeAttr", "target").click();
    cy.url().should("contain", "linkedin");
  });

  it("Check support in footer is displayed", () => {
    cy.get("a.contacts_link").eq(1).scrollIntoView().should("be.visible").contains("support@ithillel.ua");
    cy.get("a.contacts_link")
      .eq(1)
      .should("have.attr", "href", "mailto:developer@ithillel.ua");
  });

  it("Check ithillel.ua in footer is displayed", () => {
    cy.get("a.contacts_link").eq(0).scrollIntoView().should("be.visible").contains("ithillel.ua");
    cy.get("a.contacts_link").eq(0).invoke("removeAttr", "target").click();
    cy.url().should("contain", "ithillel");
  });

  
});
