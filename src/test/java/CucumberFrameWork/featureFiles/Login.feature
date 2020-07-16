Feature: Login Into Account
	Existing user should be able to login into account with correct credentials
	
Scenario: Login into account with correct credentials
Given User launches Chrome browser
When User opens URL "https://jobs.economist.com"
And Click on Login
And User enters Email as "dummy@gmmail.com" and Password as "Dummypass1"
And User click on Signin
When User click on Log out link
Then User should be taken to the homepage
And close browser  