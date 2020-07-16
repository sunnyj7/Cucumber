Feature: Jobs Search
		
Scenario: Search Job from homepage
Given User launches Chrome browser
When User opens URL "https://jobs.economist.com"
And Enters keywords as "Director" and location as "UK"
And User clicks on Search Button
Then User sees search results 
When User clicks on View Details
Then User sees the Job Details
When User opens URL "https://jobs.economist.com"
And Clicks on Banking and finance jobs under Browse jobs by Sector
Then User sees job listings and clicks on View Details
Then clicks on Apply
And close browser