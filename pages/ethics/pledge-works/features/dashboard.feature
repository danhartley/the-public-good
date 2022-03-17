# features/bank-account.feature
Feature: Bank Account

  Scenario: Stores money
    Given A bank account with starting balance of $200
    When $300 is deposited
    Then The bank account balance should be $500