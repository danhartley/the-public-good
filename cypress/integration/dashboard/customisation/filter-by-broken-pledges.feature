Feature: Responsibility Dashboard

As a team member, I want to see features with broken pledges, so that I can see which features we are struggling with.

Background:
    Given Chimamanda visits the dashboard URL

Scenario: Filter dashboard by broken pledges
    Given a list of filters
    When Chimamanda selects "broken pledges" filter
    Then the dashboard displays only features with "broken pledges"