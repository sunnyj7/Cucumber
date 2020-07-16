package CucumberFrameWork;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	
	public LoginPage(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath = "//a[contains(.,'Sign in')]")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(id = "signinemail")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(id = "signinpassword")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(css = "[value = 'Sign in']")
	@CacheLookup
	WebElement signIn;
		
	@FindBy(xpath = "//a[contains(.,'Sign out')]")
	@CacheLookup
	WebElement lnkLogout;
	
	public void clickLogin() {
		btnLogin.click();
	}
	
	public void submitLogin() {
		signIn.click();
	}
	
	public void setUserName(String uname) {
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}
	
	public void setPassword(String pwd) {
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}
	
	public void clickLogout() {
		lnkLogout.click();
	}
	
}
