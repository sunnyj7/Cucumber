$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "New account",
  "description": "",
  "id": "new-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new account",
  "description": "",
  "id": "new-account;create-a-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on Create account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enters title as \"Mr\" first name \"Dummy\" last name \"J\" email address \"dummmy@gmmail.com\" password as \"Dummypass1\" confirm password as \"Dummypass1\" and agrees terms and condition \"agreeTermsAndConds\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Create an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "duration": 14821463100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 38633693400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Create_account()"
});
formatter.result({
  "duration": 5511544000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 17
    },
    {
      "val": "Dummy",
      "offset": 33
    },
    {
      "val": "J",
      "offset": 51
    },
    {
      "val": "dummmy@gmmail.com",
      "offset": 69
    },
    {
      "val": "Dummypass1",
      "offset": 101
    },
    {
      "val": "Dummypass1",
      "offset": 134
    },
    {
      "val": "agreeTermsAndConds",
      "offset": 178
    }
  ],
  "location": "LoginSteps.enters_title_as_first_name_last_name_email_address_password_as_confirm_password_as_and_agrees_terms_and_condition(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13536257300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Create_an_account()"
});
formatter.result({
  "duration": 685674000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 2047946300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(.,\u0027Sign out\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027SUN\u0027, ip: \u0027192.168.29.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\WK\\AppData\\Local\\Temp\\scoped_dir36600_2094737739}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51236}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: bed40603866558b41e574153a182b609\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(.,\u0027Sign out\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat CucumberFrameWork.LoginPage.clickLogout(LoginPage.java:58)\r\n\tat CucumberFrameWork.steps.LoginSteps.user_click_on_Log_out_link(LoginSteps.java:57)\r\n\tat ✽.When User click on Log out link(CreateNewAccount.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Footer.feature");
formatter.feature({
  "line": 1,
  "name": "Footer Links",
  "description": "",
  "id": "footer-links",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate Links in the Footer",
  "description": "",
  "id": "footer-links;navigate-links-in-the-footer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on About Us",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be taken to the About Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Contact Us",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be taken to the Contact Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on Terms \u0026 Conditions",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to the Terms \u0026 Conditions page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Privacy Policy",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should be taken to the Privacy Policy page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on Advertise with us",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should be taken to the Advertise with us page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Clicks on Facebook button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be taken to the Facebook page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User Clicks on Twitter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should be taken to the Twitter page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Clicks on LinkedIn button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should be taken to the LinkedIn page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "duration": 18677293700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 51321719000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_About_Us()"
});
formatter.result({
  "duration": 857228100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_About_Us_page()"
});
formatter.result({
  "duration": 2999523300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Contact_Us()"
});
formatter.result({
  "duration": 4458002900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Contact_Us_page()"
});
formatter.result({
  "duration": 3000229000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Terms_Conditions()"
});
formatter.result({
  "duration": 5725014400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Terms_Conditions_page()"
});
formatter.result({
  "duration": 3003589100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Privacy_Policy()"
});
formatter.result({
  "duration": 3962690500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Privacy_Policy_page()"
});
formatter.result({
  "duration": 3000280900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Advertise_with_us()"
});
formatter.result({
  "duration": 5089017200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Advertise_with_us_page()"
});
formatter.result({
  "duration": 2999666700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 10176631600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Facebook_button()"
});
formatter.result({
  "duration": 1765308800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Facebook_page()"
});
formatter.result({
  "duration": 2999640500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Twitter_button()"
});
formatter.result({
  "duration": 5528281700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Twitter_page()"
});
formatter.result({
  "duration": 3000120800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_LinkedIn_button()"
});
formatter.result({
  "duration": 6367113500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_LinkedIn_page()"
});
formatter.result({
  "duration": 3000208500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "duration": 2022709300,
  "status": "passed"
});
formatter.uri("Jobs.feature");
formatter.feature({
  "line": 1,
  "name": "Jobs Search",
  "description": "",
  "id": "jobs-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search Job from homepage",
  "description": "",
  "id": "jobs-search;search-job-from-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enters keywords as \"Director\" and location as \"UK\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User sees search results",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on View Details",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User sees the Job Details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Banking and finance jobs under Browse jobs by Sector",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User sees job listings and clicks on View Details",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "clicks on Apply",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "duration": 4248490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 13691535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Director",
      "offset": 20
    },
    {
      "val": "UK",
      "offset": 47
    }
  ],
  "location": "LoginSteps.enters_keywords_as_and_location_as(String,String)"
});
formatter.result({
  "duration": 1746494500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Search_Button()"
});
formatter.result({
  "duration": 359418900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_sees_search_results()"
});
formatter.result({
  "duration": 2999786600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_View_Details()"
});
formatter.result({
  "duration": 355827300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(.,\u0027View details\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027SUN\u0027, ip: \u0027192.168.29.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\WK\\AppData\\Local\\Temp\\scoped_dir20824_2081427686}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52555}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 9af3e4dad93c6a200dcff9b0ed5018ce\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(.,\u0027View details\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat CucumberFrameWork.Jobs.clickViewDetails(Jobs.java:35)\r\n\tat CucumberFrameWork.steps.LoginSteps.user_clicks_on_View_Details(LoginSteps.java:263)\r\n\tat ✽.When User clicks on View Details(Jobs.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_sees_the_Job_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Banking_and_finance_jobs_under_Browse_jobs_by_Sector()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_sees_job_listings_and_clicks_on_View_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Apply()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Into Account",
  "description": "Existing user should be able to login into account with correct credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Email as \"dummy@gmmail.com\" and Password as \"Dummypass1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "duration": 16702256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 33560693400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 5825804600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dummy@gmmail.com",
      "offset": 22
    },
    {
      "val": "Dummypass1",
      "offset": 57
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 8705363700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Signin()"
});
formatter.result({
  "duration": 11003584700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 4471081600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_homepage()"
});
formatter.result({
  "duration": 4999585200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "duration": 2092134100,
  "status": "passed"
});
formatter.uri("Navigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation Bar",
  "description": "",
  "id": "navigation-bar",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check Navigation Bar Elements",
  "description": "",
  "id": "navigation-bar;check-navigation-bar-elements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Home",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be taken to the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Find a Job",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be taken to the Find a Job page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicks on Find a Job alerts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be taken to the Job alerts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search Recruiters",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be taken to the Search Recruiters page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Clicks on Jobs blog",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be taken to the Jobs blogs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Clicks on The Economist",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be taken to The Economist page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"https://jobs.economist.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on Recruiters",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User should be taken to the Recruiters page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "duration": 4396613100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 25927689400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Home()"
});
formatter.result({
  "duration": 296346000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_homepage()"
});
formatter.result({
  "duration": 4999822400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_Find_a_Job()"
});
formatter.result({
  "duration": 6304715600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Find_a_Job_page()"
});
formatter.result({
  "duration": 2999704200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2871123800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Find_a_Job_alerts()"
});
formatter.result({
  "duration": 4001914900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Job_alerts_page()"
});
formatter.result({
  "duration": 3000447800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5608941100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Search_Recruiters()"
});
formatter.result({
  "duration": 1296494400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Search_Recruiters_page()"
});
formatter.result({
  "duration": 3000231000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 6113928100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Jobs_blog()"
});
formatter.result({
  "duration": 1476859900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Jobs_blogs_page()"
});
formatter.result({
  "duration": 3000199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5036903200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_The_Economist()"
});
formatter.result({
  "duration": 4624141200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_The_Economist_page()"
});
formatter.result({
  "duration": 3001012100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.economist.com",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3920282800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Recruiters()"
});
formatter.result({
  "duration": 2709132500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_Recruiters_page()"
});
formatter.result({
  "duration": 2999987400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "duration": 1666723700,
  "status": "passed"
});
});