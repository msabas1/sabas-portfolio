package com.mnsabas.StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import com.mnsabas.PageObjects.HomePage;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class SDHome {
    private WebDriver driver;
    private HomePage homePage;

    @Before("@home-page")
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.setBrowserVersion("127");
        options.addArguments("--headless", "--disable-dev-shm-usage", "--ignore-ssl-errors=yes", "'--ignore-certificate-errors'");

        this.driver = new ChromeDriver(options);
        
        this.homePage = new HomePage(driver);
    }

    @After("@home-page")
    public void tearDown() {
        if(driver != null){
            driver.quit();
        }
    }

    @Given("I am on the Home page")
    public void iAmOnTheHomePage() {
        this.homePage.get();
    }

    @Then("I can see the Welcome banner")
    public void  iCanSeeTheWelcomeBanner() {
        Assert.assertTrue(driver.findElement(By.id("welcome-banner-container")).isDisplayed());
    }
}