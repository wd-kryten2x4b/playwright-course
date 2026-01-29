import { Page, Locator } from '@playwright/test'

class BlogPage {
    //Decalre all the properties
    private page: Page;
    blogLink: Locator;
    blogRecent: Locator;

    constructor(page:Page) {
        this.page = page
        this.blogLink = page.locator('#zak-primary-nav li[id=menu-item-490]')
        this.blogRecent = page.locator('#recent-posts-3 ul li')
    }

async navigateMain() {
    await this.page.goto('/');

}
}

export default BlogPage;