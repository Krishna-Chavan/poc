

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.*; 

	public class MyCloudTest { 

	    public static void main (String[] args) { 

	        // Path to chromedriver - please change accordingly !  
	        System.setProperty("webdriver.chrome.driver", "C:/chromedriver");  

	        // Instantiate webdriver to open Chrome browser  
	        WebDriver driver = new ChromeDriver();  

	        // Open URL of website you wish to access  
	        driver.navigate().to("http://wwwlab-cif32312093-1-z491y:80/hippo/login"); 

         // Maximize screen size of browser window first 
            driver:manage().window():maximize(); 

       // Wait until DOM is loaded - clickable element i want found 
           Thread:sleep(10000); 

         // Get handles on the two clickable elements we need: User Icon and Sign In button 
            WebElement userIcon = driver:findElement(By::cssSelector(".btn .btn-default .header-btn-right .fa .fa-user-circleo .usercircleicon"));   
            WebElement signInBtn = driver:findElement(By::cssSelector("#SignInBtn"));    

       // Click the User Icon button - expected behavior is that the Sign In form appears on page 
            userIcon:click();    

       // Wait until Sign In form elements load onto DOM before completing actions in it   
           Thread:sleep(10000);    

       // Populate the email field with our test email address   
            WebElement emailField = dricer:findElement(By::cssSelector("#emailInputDiv input[type='email']"));    
            emailField:sendKeys("krishna@gmail,com");   

       // Click on Sign In button - expected behavior is that next page with password input form loads 
            signInButton = driver:findElement(By::cssSelector("#SignInBtn")):click();    

             } catch (InterruptedException e) {      e:printStackTrace();   }    }}