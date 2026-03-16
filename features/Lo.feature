Feature: Lo

Scenario: Verify successful loginfunctionality

Given User navigates to the application
When User login with valid "vinay@gmail.com" and valid password "mek@123"
Then User should be navigated to homepage