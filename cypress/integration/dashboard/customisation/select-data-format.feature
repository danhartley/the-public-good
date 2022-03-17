Feature: Responsibility Dashboard

Background:
    Given Chimamanda visits the dashboard URL

Scenario: Show data in a variety of formats
    When Chamamanda selects the "Table" display option
    Then the data are displayed in "tabular" form