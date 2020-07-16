package CucumberFrameWork;

	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.CacheLookup;
	import org.openqa.selenium.support.FindBy;
	import org.openqa.selenium.support.PageFactory;

	public class Footer {
			
			public WebDriver ldriver;
			
			public Footer(WebDriver rdriver)
			{
				ldriver = rdriver;
				PageFactory.initElements(rdriver, this);
			}
			
			@FindBy(xpath = "//a[contains(.,'About Us')]")
			@CacheLookup
			WebElement btnAboutUs;
			
			@FindBy(xpath = "//a[contains(.,'Contact Us')]")
			@CacheLookup
			WebElement btnContactUs;
			
			@FindBy(xpath = "//a[contains(.,'Terms & Conditions')]")
			@CacheLookup
			WebElement btnTerms;
			
			@FindBy(xpath = "//a[contains(.,'Privacy Policy')]")
			@CacheLookup
			WebElement btnPrivacy;
			
			@FindBy(xpath = "//a[contains(.,'Advertise with us')]")
			@CacheLookup
			WebElement btnAdvertise;
			
			@FindBy(xpath = ".//a[@data-icon = 'F']")
			@CacheLookup
			WebElement btnFacebook;
			
			@FindBy(xpath = ".//a[@data-icon = 'T']")
			@CacheLookup
			WebElement btnTwitter;
			
			@FindBy(xpath = ".//a[@data-icon = 'L']")
			@CacheLookup
			WebElement btnLinkedIn;
					
			public void clickAboutUs() {
				btnAboutUs.click();
			}
			
			public void clickContactUs() {
				btnContactUs.click();
			}
						
			public void clickTerms() {
				btnTerms.click();
			}
			
			public void clickPrivacy() {
				btnPrivacy.click();
			}
			
			public void clickAdvertise() {
				btnAdvertise.click();
			}
			
			public void clickFacebook() {
				btnFacebook.click();
			}
			
			public void clickTwitter() {
				btnTwitter.click();
			}
			
			public void clickLinkedIn() {
				btnLinkedIn.click();
			}
			
	}
