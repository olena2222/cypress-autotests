export default class {
  checkVisibility(element) {
    element.should("be.visible");
  }
  removeAttributes(element, attribute) {
    element.invoke("removeAttr", attribute);
  }
  checkHref(element, link) {
    element.should("have.attr", "href", link);
  }
  checkLabel(labelText) {
    return cy.contains("label", labelText);
  }
  checkError(selector, text) {
    return cy.contains(selector, text);
  }
  validateEmptyField(element) {
    element.focus().blur();
  }
  checkBorderColor(element, color) {
    element.should("have.css", "border-color", color);
  }
}
