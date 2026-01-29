import { Page, Locator } from '@playwright/test'

class ContactPage {
    //Decalre all the properties
    private page: Page;
    contactLink: Locator;
    nameField: Locator;
    emailField: Locator;
    numberField: Locator;
    messageField: Locator;
    submitBtn: Locator;
    confirmMsg: Locator;



    constructor(page:Page) {
        this.page = page
        this.contactLink = page.locator('#zak-primary-nav li[id=menu-item-493]')
        this.nameField = page.locator('input#evf-277-field_ys0GeZISRs-1')
        this.emailField = page.locator('input#evf-277-field_LbH5NxasXM-2')
        this.numberField = page.locator('input#evf-277-field_66FR384cge-3')
        this.messageField = page.locator('textarea#evf-277-field_yhGx3FOwr2-4')   
        this.submitBtn = page.locator('button#evf-submit-277')
        this.confirmMsg = page.locator('div[role="alert"]')   
            }

async navigateMain() {
    await this.page.goto('/');
}

async submitForm(name:string, email:string, phone:string, message:string) {
        await this.nameField.fill(name)
        await this.emailField.fill(email)
        await this.numberField.fill(phone)
        await this.messageField.fill(message)

        await this.page.waitForTimeout(5000);

        await this.submitBtn.click()
}

}

export default ContactPage;