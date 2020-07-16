Feature: New account
		
Scenario: Create a new account 
Given User launches Chrome browser
When User opens URL "https://jobs.economist.com"
And Clicks on Create account
And Enters title as "Mr" first name "Tommmy" last name "J" email address "tommyj@gmmail.com" password as "Dummypass1" confirm password as "Dummypass1" and agrees terms and condition "agreeTermsAndConds"
And clicks on Create an account
Then if account already exists then skip remaining steps
When User click on Log out link
Then User should be taken to the homepage
And close browser