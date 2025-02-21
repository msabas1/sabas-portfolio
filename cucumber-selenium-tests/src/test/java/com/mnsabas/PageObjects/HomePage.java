package com.mnsabas.PageObjects;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    private final WebDriver driver;
    // private static final String url = "https://mnsabas.netlify.app/";
    private static final String url = "http://localhost:5173/";

    //buttons
    @FindBy(id="add-warehouse")
    private WebElement addWarehouseButton;

     /**
     * Initializes the driver and sets an implicit wait 
     */
    public HomePage(WebDriver driver) {
        this.driver = driver;
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    /**
     * Navigating to the home page
     * pause execution for 1000 mili sec before navigating
     */
    public void get() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        this.driver.get(url);
    }
}