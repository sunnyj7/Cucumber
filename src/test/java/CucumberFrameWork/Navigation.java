package CucumberFrameWork;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Navigation {
		
		public WebDriver ldriver;
		
		public Navigation(WebDriver rdriver)
		{
			ldriver = rdriver;
			PageFactory.initElements(rdriver, this);
		}
		
		@FindBy(xpath = "//a[contains(.,'Home')]")
		@CacheLookup
		WebElement btnHome;
		
		@FindBy(xpath = "//a[contains(.,'Find a job')]")
		@CacheLookup
		WebElement btnFindJob;
		
		@FindBy(xpath = "//a[contains(.,'Job alerts')]")
		@CacheLookup
		WebElement btnJobAlerts;
		
		@FindBy(xpath = "//a[contains(.,'Search recruiters')]")
		@CacheLookup
		WebElement btnRecruiters;
		
		@FindBy(xpath = "//a[contains(.,'Jobs blog')]")
		@CacheLookup
		WebElement btnJobBlogs;
		
		@FindBy(xpath = "//img[@title='Jobs.Economist.com']")
		@CacheLookup
		WebElement logoTheEconomist;
		
		@FindBy(xpath = "//a[contains(.,'Recruiters')]")
		@CacheLookup
		WebElement btnRecruite;
				
		public void clickHome() {
			btnHome.click();
		}
		
		public void clickFindAJob() {
			btnFindJob.click();
		}
					
		public void clickJobAlerts() {
			btnJobAlerts.click();
		}
		
		public void clickRecruiter() {
			btnRecruiters.click();
		}
		
		public void clickJobBlogs() {
			btnJobBlogs.click();
		}
		
		public void clickTheEconomistLogo() {
			logoTheEconomist.click();
		}

		public void clickRecruite() {
			btnRecruite.click();
		}
		
}
