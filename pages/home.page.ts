 import{Page, Locator} from "@playwright/test"
 
 class HomePage { 
    //Declare all properties for TypeScript
     page: Page;
     getStartedBtn: Locator;
     headingText: Locator;
     homeText: Locator;
     searchIcon: Locator;
     navLinks: Locator;
     aboutLink: Locator;

    constructor(page:Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text="Think different. Make different."')
        this.homeText = page.locator('#zak-primary-menu:has-text("Home")')
        this.searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]')
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        this.aboutLink = page.locator('#zak-primary-menu li[id*=menu-item-491]')
    }

async navigate() {
     await this.page.goto('/');
}

getNavLinksText() {
    return this.navLinks.allTextContents();
}

 }

 export default HomePage;
