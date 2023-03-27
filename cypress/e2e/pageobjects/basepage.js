export const clickElement = (cssSelector) => {
  cy.get(cssSelector).click();
};

export const navigateTo = (url) => {
  cy.visit(url);
};

export const type = (cssSelector, string) => {
  cy.get(cssSelector).type(string);
};

export const validateElementIsVisible = (cssSelector) => {
  cy.get(cssSelector).should("be.visible");
};

export const validateElementContainsText = (cssSelector, text) => {
  cy.get(cssSelector).should("contain", text);
};
