package CucumberFrameWork;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Jobs {

	public WebDriver ldriver;
	
	public Jobs(WebDriver rdriver)
	{
		ldriver = rdriver;
	}
	
	By txtKeywords = By.xpath("//input[@id = 'keywords']");            
	By txtLocation = By.xpath("//input[@id = 'location']");						 //find element (location) by id
	By btnSearch = By.xpath("//input[@type = 'submit' and @value = 'Search']");  //find element (Search button) by id
	By btnViewDetails = By.xpath("//a[contains(.,'View details')]");            //find element view details button by text
	By btnViewJobsBySector = By.xpath("//a[contains(.,'Banking and finance')]");   //find element view details button by text
				
	public void setParams(String keywords, String locations) {
		ldriver.findElement(txtKeywords).sendKeys(keywords);					//find web element and enter value in the input box with response received from the feature file  
		ldriver.findElement(txtLocation).sendKeys(locations);					
	}
	
	public void clickJobsBySector() {
		ldriver.findElement(btnViewJobsBySector).click();						
	}
				
	public void clickSearch() {
		ldriver.findElement(btnSearch).click();
	}
	
	public void clickViewDetails() {
		ldriver.findElement(btnViewDetails).click();
	}
	
		
}
