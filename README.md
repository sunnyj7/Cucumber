# Task : Automate Testing for Economist Website.

## Scenario
Write automated test suite for some of the features of Economist Website (https://jobs.economist.com) and create for advertising various career opportunities at The Economist.

## Tools Required/Dependencies for the Project: 
 - Chromedriver
 - Selenium-Webdriver
 - Java
 - Cucumber
 - GIT
 - Eclipse
### Automated Test Suite has been created for the below scenarios:

    - Economist Website (https://jobs.economist.com) url opens up in the browser.
    - Check Create account and sign in functionality.
    - All navigation bar buttons are present and working.
    - The Economist logo is visible and functional.
    - Recruiters button (Secondary nav bar).
    - Links are present in the Footer and working (including Facebook, Twitter and Linked).
    - Search button is working properly on the homepage
    - Browse jobs by Sector (Checked for Banking and finance).

### Features checked manually:

    - Website contents are properly visible.
    - Navigation bar is functional.
    - Creating new account.
    - Login with the existing account.
    - Search/Recruiters button.

### Task/Project summary:

1. Automated test suite has been created for all the scenarios mentioned above in (Automated Test Suite).
2. Few scenarios have been checked manually (please see above).
3. All dependicies are present in the .pom file along with the appropriate versions.
4. I have used the below feature files for test suite:
    * CreateNewAccount.feature (this will be functional with the new account and down the line can be modified with more features).
    * Login.feature - To Sign In with an existing account.
    * Navigation.feature - For Navigation bar buttons.
    * Footer.feature - For footer links.
    * Jobs.feature - (I was still working on it so it is not fully functional)
5. MainRunner.java can run all the test cases at once (through feature file) to run MainRunner.java JUnit was used and individual feature files can be executed through Cucumber Feature 
   (Run As -> Run Configuration -> Login (and select the appropriate feature file).
6. Reporting for the project can be accessed through report.html under target folder and .json format is present as well.
7. Also I have added sleep threads at various points in the code due to connectivity issues at my end.