package com.mnsabas;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "classpath:com/mnsabas/", 
    glue = "com.mnsabas",
    plugin = {"pretty", "html:target/cucumber-reports.html"} 
)
public class RunCucumberTest extends AbstractTestNGCucumberTests{
}