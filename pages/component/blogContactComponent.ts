import { Locator, Page } from '@playwright/test'

class blogContactComponet {
    private page: Page;


constructor(page: Page) {
    this.page = page;

}

async navigateBlog() {

    await this.page.goto('/blog/');
}

async navigateContact() {

    await this.page.goto('/contact/');
}




}