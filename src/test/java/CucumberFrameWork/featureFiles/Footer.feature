Feature: Footer Links
		
Scenario: Navigate Links in the Footer
Given User launches Chrome browser
When User opens URL "https://jobs.economist.com"
And Click on About Us
Then User should be taken to the About Us page
When User Clicks on Contact Us
Then User should be taken to the Contact Us page 
When User Clicks on Terms & Conditions
Then User should be taken to the Terms & Conditions page
When User Clicks on Privacy Policy
Then User should be taken to the Privacy Policy page
When User Clicks on Advertise with us
Then User should be taken to the Advertise with us page
When User opens URL "https://jobs.economist.com"
And User Clicks on Facebook button
Then User should be taken to the Facebook page
When User Clicks on Twitter button
Then User should be taken to the Twitter page
When User Clicks on LinkedIn button
Then User should be taken to the LinkedIn page
And close browser