import {test, expect, Page} from "@playwright/test";

test.describe('My Account 2',()=> {  //this runs the tests one after another rather than
    //in parallel 
    //create new variable as type Page
    let page: Page

    test.beforeAll(async ({browser}) => {
        //give browser instance to be shared by all tests
        page = await browser.newPage()
        await page.goto('/my-account');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('[value="Log in"]').click();
        await expect(page.locator(`li a[href*='logout']`)).toBeVisible();
    });

    test('Access orders', async() => { //page removed
        //await page.goto('/my-account');
        await page.locator(`li a[href*='orders']`).click();
        await expect (page).toHaveURL(/.*orders/);

    });

test('Access Downlaods', async() => { //remove page
    //await page.goto('/my-account');
    await page.locator(`li a[href*='downloads']`).click();
    await expect(page).toHaveURL(/.*downloads/);
    });
 
})