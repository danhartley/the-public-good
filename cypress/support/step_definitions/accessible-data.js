import { Before, After, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'ethics/pledge-works/pdd/dashboard'
Given('Chamamanda visits the dashboard', () => {
    cy.visit(url);
});

Then(`data are presented in tabular form`, () => {
    cy.get('#container').find('table');
});