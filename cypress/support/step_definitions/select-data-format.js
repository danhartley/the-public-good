import { Before, After, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

When('Chamamanda selects the {string} display option', (option) => {
    cy.get('#display').find('.tab.active').contains(option, {matchCase: false});
});

Then('the data are displayed in {string} form', style => {
    return 'pending'; //"tabular"
});