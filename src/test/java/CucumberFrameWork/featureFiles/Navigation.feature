Feature: Navigation Bar
		
Scenario: Check Navigation Bar Elements
Given User launches Chrome browser
When User opens URL "https://jobs.economist.com"
And Click on Home
Then User should be taken to the homepage
When User Clicks on Find a Job
Then User should be taken to the Find a Job page 
When User opens URL "https://jobs.economist.com"
And Clicks on Find a Job alerts
Then User should be taken to the Job alerts page
When User opens URL "https://jobs.economist.com"
And Clicks on Search Recruiters
Then User should be taken to the Search Recruiters page
When User opens URL "https://jobs.economist.com"
And Clicks on Jobs blog
Then User should be taken to the Jobs blogs page
When User opens URL "https://jobs.economist.com"
And Clicks on The Economist
Then User should be taken to The Economist page
When User opens URL "https://jobs.economist.com"
When Clicks on Recruiters
Then User should be taken to the Recruiters page
And close browser