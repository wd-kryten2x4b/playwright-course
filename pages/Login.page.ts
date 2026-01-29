import { Page, Locator } from '@playwright/test'

class LoginPage {
    private page: Page;
    userName: Locator;
    loginBtn: Locator;
    passWord: Locator;
    submitBtn: Locator;
    envName: Locator;
    selectEnv: Locator;


    constructor(page:Page)  {
        this.page = page
        this.userName = page.locator('input#login_username');
        this.loginBtn = page.locator('button#login_submit');
        this.passWord = page.locator('input#login_password');
        this.submitBtn = page.locator('button.c-nonAuthForm-button span').nth(1);
        this.selectEnv = page.locator('Lyse DEV');
        this.envName = page.locator('div.css-43lg0o:has-text("Lyse SIT")')





    }

    async navigateMain() {
        this.page.goto('https://invision.sbx1.ascendon.tv/customercare/login')
    }



}

export default LoginPage;