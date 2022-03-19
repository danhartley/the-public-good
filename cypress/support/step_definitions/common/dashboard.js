import { Before, After, Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'ethics/pledge-works/dashboard'
Given('Chimamanda visits the dashboard URL', () => {
  cy.visit(url);
});