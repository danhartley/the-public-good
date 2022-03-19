Feature: Responsibility Dashboard

Background:
    Given Chimamanda visits the dashboard URL

Scenario: Display pledges associated with a value

    Given a list of values
    When a value is selected
    Then the pledges for that value are displayed