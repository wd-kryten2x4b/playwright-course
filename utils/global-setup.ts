import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig)  {
    
    // new variables for browser & page
    const browser= await chromium.launch();
    const page = await browser.newPage()
    
    //open my accounts page
    await page.goto('https://practice.sdetunicorns.com/my-account');
     //save Not signed in state to 'loggedInState.json
    await page.context().storageState({path: 'notLoggedInState.json'});
    
    //log in
    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('[value="Log in"]').click();

    //save signed in state to 'loggedInState.json
    await page.context().storageState({path: 'loggedInState.json'});
    //close the browser
    await browser.close();
}
    
export default globalSetup;

