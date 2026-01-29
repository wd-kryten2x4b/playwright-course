import {test, expect} from "@playwright/test"
import LoginPage from "../pages/Login.page";
import { setTimeout } from "timers/promises";


test.describe('Login', () => {
    let loginPage: LoginPage;

    test('Open Ascendon URL and ensure Username test box is visible', async ({ page }) => {
        loginPage = new LoginPage(page);
        
        //Open Aboutpage
        await loginPage.navigateMain();
       // await page.pause();
        //await page.goto('https://invision.sbx1.ascendon.tv/customercare/login');
        
        //Verify the Userrname field and that it is visible
        await loginPage.userName.first().waitFor();
        await expect(loginPage.userName).toBeVisible();             
    
        //populate Username and click next
        await loginPage.userName.fill('william.devitt@lyse.no');
        await loginPage.loginBtn.click();

        //check the password screen

        await expect(loginPage.passWord).toBeVisible(); 
        
        //populate the password and click login

        await loginPage.passWord.fill('Singapore1964@1964');
        await loginPage.submitBtn.click();
        
        await page.pause()
        //This locator resolves to 2 options. 
        //The Hidden NEXT button on the Username screen and the Login on the password screen. using nth(1) selects the Login butto

        //Always select Lyse SIT
        const currentEnv = expect(loginPage.envName).toHaveText('Lyse SIT');

        if (currentEnv) {
            console.log("The enivronment is Lyse SIT")
            
        } else {
            
        }

        await loginPage.envName.click();

        await loginPage.selectEnv.click();

        //Check that the new screen URL is for Lyse SIT
        await expect(loginPage.envName).toHaveText('Lyse SIT');

    });
 
});


       

