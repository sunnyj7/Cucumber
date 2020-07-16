package CucumberFrameWork;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class CreateNewAccount {
	
	public WebDriver ldriver;
	
	public CreateNewAccount(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
	}
	//find elements under Create account module for entering values in the respective fields and also for selecting checkbox
	By lnkSingup = By.xpath("//a[contains(text(),'Create account')]");			//find element Create account button by text
	By txtTitle = By.xpath("//input[@id = 'title']");							//find element for entering value in the title (Create account section)
	By txtFirstName = By.xpath("//input[@id = 'firstname']");					
	By txtLastName = By.xpath("//input[@id = 'lastname']");
	By txtEmail = By.xpath("//input[@id = 'emailaddress']");
	By txtPass = By.xpath("//input[@id = 'regpassword']");
	By txtConfirmPass = By.xpath("//input[@id = 'confirmpassword']");			//find element for confirm password input
	By btnCreateAnAccount = By.xpath("//input[@type = 'submit' and @value = 'Create an account']");
	By chkBoxTerms = By.xpath("//input[@id = 'agreeTermsAndConds']");			//find element check box for agreeing to the terms and conditions
	
	public void clickOnCreateAccount() {
		ldriver.findElement(lnkSingup).click();
	}
	
	public void setParams(String title,String firstName,String lastName,String email,String pass,String confirmpass) {
		ldriver.findElement(txtTitle).sendKeys(title);
		ldriver.findElement(txtFirstName).sendKeys(firstName);
		ldriver.findElement(txtLastName).sendKeys(lastName);
		ldriver.findElement(txtEmail).sendKeys(email);
		ldriver.findElement(txtPass).sendKeys(pass);
		ldriver.findElement(txtConfirmPass).sendKeys(confirmpass);
	}
	
	public void clickOnchkBoxTerms() {
		ldriver.findElement(chkBoxTerms).click();
	}
	
	public void clickOnbtnCreateAnAccount() {
		ldriver.findElement(btnCreateAnAccount).click();							//Click on the create account button
	}

}
