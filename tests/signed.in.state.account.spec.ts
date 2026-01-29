import {test, expect} from "@playwright/test";

test.describe('My Account',()=> {  
    test.use({storageState: 'loggedInState.json'});
    test('Access orders', async({page}) => { //page removed
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