Feature: Responsibility Dashboard

  As a team member, I want to review the use of pledges at my company, so that I can see if pledge writing is effective.
  
 @authorisation
 Scenario: Team members have access to their company's PDD dashboard
    Given Chimamanda visits the dashboard URL
    Then Chimamanda sees "PDD Dashboard" in the browser tab