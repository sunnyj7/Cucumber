package CucumberFrameWork.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions ( 
		features = {"src/test/java/CucumberFrameWork/featureFiles/"},   //if no .feature file name is mentioned then all the feature files will be executed at once
		glue = {"CucumberFrameWork.steps"}, // location/path of step file
		dryRun=false,     //When it is set to false, all statements/code inside the step definitions method will execute.
		monochrome = true,
		tags = {},
		plugin = {"pretty","html:target/cucumber.html","json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)

public class MainRunner {

}

