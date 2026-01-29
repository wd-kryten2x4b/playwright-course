import {test, expect} from "@playwright/test";

test.describe('My Account',()=> {

    test('Login', async ({page}) => {
        await page.goto('/my-account');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('[value="Log in"]').click();
        await expect(page.locator(`li a[href*='logout']`)).toBeVisible();
    });

    test('Access orders', async({page}) => {
        await page.goto('/my-account');
        await page.locator(`li a[href*='orders']`).click();
        await expect (page).toHaveURL(/.*orders/);

    });

test('Access Downlaods', async({page}) => {
    await page.goto('/my-account');
    await page.locator(`li a[href*='downloads']`).click();
    await expect(page).toHaveURL(/.*downloads/);
    });
 
})