import { Before, After, Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(`Chimamanda sees {string} in the browser tab`, (title) => {
    cy.title().should('include', title);
});