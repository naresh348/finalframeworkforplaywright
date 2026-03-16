Feature: Login

@flaky
Scenario: Verify successful login

Given User navigates to the application
When User login with username "student" and password "Password123"
Then Login should be successful
