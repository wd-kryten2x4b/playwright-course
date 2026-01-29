import {test, expect} from "@playwright/test";

test.describe('My Account',()=> {
    //Verify Log In button without a signed in state
    test.use({storageState: 'notLoggedInState.json'});

    test('Verify Log In and register are visible', async({page}) => { 
        await page.goto('/my-account');
        await expect(page.locator('form[class*="login"]')).toBeVisible();
        await expect (page.locator('form[class*="register"]')).toBeVisible();
    });    

    test('Access orders', async({page}) => {
        await page.goto('/my-account');
        await page.locator(`li a[href*='orders']`).click();
        await expect (page).toHaveURL(/.*orders/);

    });

test('Access Downlaods', async({page}) => { //remove page
    await page.goto('/my-account');
    await page.locator(`li a[href*='downloads']`).click();
    await expect(page).toHaveURL(/.*downloads/);
    });
 
});