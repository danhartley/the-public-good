import { Before, After, Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('a list of values', function () {
    cy.get('.value');
});

When('a value is selected', function () {
    cy.get('.value').contains('sustainability', {matchCase: false}).click();
});

Then('the pledges for that value are displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});