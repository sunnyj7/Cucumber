package CucumberFrameWork.steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import CucumberFrameWork.*;

public class LoginSteps {
	public WebDriver driver;
	public LoginPage lp;
	public CreateNewAccount cna;
	public Navigation nav;
	public Footer foot;
	public Jobs job;
	
	@Given("^User launches Chrome browser$")
	public void user_launches_Chrome_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		lp = new LoginPage(driver);
		cna = new CreateNewAccount(driver);
		nav = new Navigation(driver);
		foot = new Footer(driver);
		job = new Jobs(driver);
		driver.manage().window().maximize();
	}
	
	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
		Thread.sleep(2000);
	}

	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
		lp.clickLogin();
		Thread.sleep(3000);
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {
		lp.setUserName(email);
		lp.setPassword(password);
		Thread.sleep(3000);
	}
	
	@When("^User click on Signin$")
	public void user_click_on_Signin() throws Throwable {
		lp.submitLogin();
		Thread.sleep(3000);
	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws Throwable {
		lp.clickLogout();
	}

	@Then("^User should be taken to the homepage$")
	public void user_should_be_taken_to_the_homepage() throws Throwable {
		Thread.sleep(5000);
		
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.quit();
		
	}
	
	//Additional step definition for New account
	
	@When("^Clicks on Create account$")
	public void clicks_on_Create_account() throws Throwable {
		cna.clickOnCreateAccount();
		Thread.sleep(6000);
	}

	@When("^Enters title as \"([^\"]*)\" first name \"([^\"]*)\" last name \"([^\"]*)\" email address \"([^\"]*)\" password as \"([^\"]*)\" confirm password as \"([^\"]*)\" and agrees terms and condition \"([^\"]*)\"$")
	public void enters_title_as_first_name_last_name_email_address_password_as_confirm_password_as_and_agrees_terms_and_condition(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
	 	cna.setParams(arg1,arg2,arg3,arg4,arg5,arg6);
	 	cna.clickOnchkBoxTerms();
	}

	@When("^clicks on Create an account$")
	public void clicks_on_Create_an_account() throws Throwable {
		cna.clickOnbtnCreateAnAccount();
	    
	}
	
	@Then("^if account already exists then skip remaining steps$")
	public void if_account_already_exists_then_skip_remaining_steps() throws Throwable {
		if (driver.getPageSource().contains("This email address has already been registered")) {
			System.out.println("User Already Exists and skipping remaining steps");
			driver.quit();			
			Assert.assertTrue(false);
		}
	}
	
	//Additional step definition for Navigation Bar
	
	@When("^Click on Home$")
	public void click_on_Home() throws Throwable {
		nav.clickHome();
	}

	@When("^User Clicks on Find a Job$")
	public void user_Clicks_on_Find_a_Job() throws Throwable {
		nav.clickFindAJob();
	}

	@Then("^User should be taken to the Find a Job page$")
	public void user_should_be_taken_to_the_Find_a_Job_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^Clicks on Find a Job alerts$")
	public void clicks_on_Find_a_Job_alerts() throws Throwable {
		nav.clickJobAlerts();
	}

	@Then("^User should be taken to the Job alerts page$")
	public void user_should_be_taken_to_the_Job_alerts_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^Clicks on Search Recruiters$")
	public void clicks_on_Search_Recruiters() throws Throwable {
		nav.clickRecruiter();
	}

	@Then("^User should be taken to the Search Recruiters page$")
	public void user_should_be_taken_to_the_Search_Recruiters_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^Clicks on Jobs blog$")
	public void clicks_on_Jobs_blog() throws Throwable {
		nav.clickJobBlogs();
	}

	@Then("^User should be taken to the Jobs blogs page$")
	public void user_should_be_taken_to_the_Jobs_blogs_page() throws Throwable {
		Thread.sleep(3000);
	}
	
	@When("^Clicks on The Economist$")
	public void clicks_on_The_Economist() throws Throwable {
		Thread.sleep(1000);
		nav.clickTheEconomistLogo();
	}

	@Then("^User should be taken to The Economist page$")
	public void user_should_be_taken_to_The_Economist_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^Clicks on Recruiters$")
	public void clicks_on_Recruiters() throws Throwable {
		Thread.sleep(1000);
		nav.clickRecruite();
	}

	@Then("^User should be taken to the Recruiters page$")
	public void user_should_be_taken_to_the_Recruiters_page() throws Throwable {
		Thread.sleep(3000);
	}
	
	// Additional step definition for Footer
	
	@When("^Click on About Us$")
	public void click_on_About_Us() throws Throwable {
		foot.clickAboutUs();
	}

	@Then("^User should be taken to the About Us page$")
	public void user_should_be_taken_to_the_About_Us_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on Contact Us$")
	public void user_Clicks_on_Contact_Us() throws Throwable {
		foot.clickContactUs();
	}

	@Then("^User should be taken to the Contact Us page$")
	public void user_should_be_taken_to_the_Contact_Us_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on Terms & Conditions$")
	public void user_Clicks_on_Terms_Conditions() throws Throwable {
		foot.clickTerms();
	}

	@Then("^User should be taken to the Terms & Conditions page$")
	public void user_should_be_taken_to_the_Terms_Conditions_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on Privacy Policy$")
	public void user_Clicks_on_Privacy_Policy() throws Throwable {
		foot.clickPrivacy();
	}

	@Then("^User should be taken to the Privacy Policy page$")
	public void user_should_be_taken_to_the_Privacy_Policy_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on Advertise with us$")
	public void user_Clicks_on_Advertise_with_us() throws Throwable {
		foot.clickAdvertise();
		
	}

	@Then("^User should be taken to the Advertise with us page$")
	public void user_should_be_taken_to_the_Advertise_with_us_page() throws Throwable {
		Thread.sleep(3000);
		
	}
	
	@When("^User Clicks on Facebook button$")
	public void user_Clicks_on_Facebook_button() throws Throwable {
		foot.clickFacebook();
	}

	@Then("^User should be taken to the Facebook page$")
	public void user_should_be_taken_to_the_Facebook_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on Twitter button$")
	public void user_Clicks_on_Twitter_button() throws Throwable {
		foot.clickTwitter();
	}

	@Then("^User should be taken to the Twitter page$")
	public void user_should_be_taken_to_the_Twitter_page() throws Throwable {
		Thread.sleep(3000);
	}

	@When("^User Clicks on LinkedIn button$")
	public void user_Clicks_on_LinkedIn_button() throws Throwable {
		foot.clickLinkedIn();
	}

	@Then("^User should be taken to the LinkedIn page$")
	public void user_should_be_taken_to_the_LinkedIn_page() throws Throwable {
		Thread.sleep(3000);
	}

	// Additional step definition for Job Search
	@When("^Enters keywords as \"([^\"]*)\" and location as \"([^\"]*)\"$")
	public void enters_keywords_as_and_location_as(String arg1, String arg2) throws Throwable {
		job.setParams(arg1,arg2);
	}

	@When("^User clicks on Search Button$")
	public void user_clicks_on_Search_Button() throws Throwable {
		job.clickSearch();
	}
	
	@Then("^User sees search results$")
	public void user_sees_search_results() throws Throwable {
		Thread.sleep(6000);
	}

	@When("^User clicks on View Details$")
	public void user_clicks_on_View_Details() throws Throwable {
		job.clickViewDetails();
	}

	@Then("^User sees the Job Details$")
	public void user_sees_the_Job_Details() throws Throwable {
		Thread.sleep(6000);
	}
		
	@When("^Clicks on Banking and finance jobs under Browse jobs by Sector$")
	public void clicks_on_Banking_and_finance_jobs_under_Browse_jobs_by_Sector() throws Throwable {
		job.clickJobsBySector();
		Thread.sleep(6000);
	}

	@Then("^User sees job listings and clicks on View Details$")
	public void user_sees_job_listings_and_clicks_on_View_Details() throws Throwable {
		job.clkJobsBySector();
		Thread.sleep(6000);
	}
	
	@Then("^clicks on Apply$")
	public void clicks_on_Apply() throws Throwable {
		job.clickApply();
		Thread.sleep(6000);
		
	}
	

}
