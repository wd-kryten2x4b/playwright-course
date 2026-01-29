import {test, expect} from "@playwright/test"
//Import the HomePage class from the pages folder
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    //new variable
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
      await homePage.navigate();
})
    

    test('Open HomePage and Verify Titles', async ({ page }) => {
        // //define homePage
        // homePage = new HomePage(page);
        //Removed Due to before each hook
        // //Open the Home URL and verify Title
        // await homePage.navigate();

        //Verify HomePage title
        await expect(page).toHaveTitle('Practice  E-Commerce Site – SDET Unicorns'); 
     });

    test ('Open About and Verify Titles', async ({ page }) => {
        
        // //define homePage
        // homePage = new HomePage(page)

        // //Open the Home URL and verify Title
        // await homePage.navigate();
        //click about heading
        await page.locator('#zak-primary-menu li[id*=menu-item-491]').click();
        //Verify the About page Title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site'); 
    
    });

    test('Click Get Started Button using CSS selector', async ({ page }) => {

        // //define homePage
        // homePage = new HomePage(page);
        
        // //Open start page
        // await homePage.navigate();

        //Open the Playwright Inspector in the test code for debugging it will start
        //the debugging from this step.
        //await page.pause();

        //Check that the URL does not have Get Stated in it before 
        await expect(page).not.toHaveURL(/.*#get-started/); 

        //Click the button CSS selector is the href value of the item required
        //await page.locator('#get-started').click();
        await homePage.getStartedBtn.click();

        //Verify the URL has #get-started
        await expect(page).toHaveURL(/.*#get-started/); 
    
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test('Verify Heading text is visible using Text selector', async ({ page }) => {

        // //define homePage
        // homePage = new HomePage(page);
        
        // //Open HomePage
        // await homePage.navigate();;

        //Find the text and store to a variable
        const headingText = await homePage.headingText;
        
        //Verify variable text is visible
        await expect(headingText).toBeVisible();  
    
    });


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test('Verify Home link is enabled using Text & CSS selectors', async ({ page }) => {

        // //define homePage
        // homePage = new HomePage(page);
        
        // //Open HomePage
        //  await homePage.navigate();;

        //Find the home text and store to a variable
       // const homeText = await page.locator('#zak-primary-menu >> text=Home'); //This is top part of parent then look for
         const homeText = await homePage.homeText; //Primary option and has text      
        //Verify variable text is enabled
        await expect(homeText).toBeEnabled();  
    
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test('Verify Search Icon is visible using XPath selector', async ({ page }) => {

        // //define homePage
        // homePage = new HomePage(page);
        
        // //Open HomePage
        // await homePage.navigate();

        //Verify the search icon is visible
         const searchIcon = await homePage.searchIcon; //Primary option and has text      
        //Verify variable text is enabled
        await expect(searchIcon).toBeVisible();  
    
    });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        test('Verify Text for all nav links', async ({ page }) => {

        //define homePage
        // homePage = new HomePage(page);

            //This is the list of navigation links from the target URL. Pay attention to the spelling of the links
            const expectedLinks =[
                "Home",
                "About",
                "Shop",
                "Blog",
                "Contact", //should be Contact
                "My account",
            ];

        //Open HomePage
        // await homePage.navigate();


        //Find the navi Links
       const testNavLinks = homePage.navLinks; //Primary nav block and Link Id starts with menu    
        
        // //Print out all the links
        //for (const el of await testNavLinks.elementHandles()) {
            //console.log(await el.textContent())
        //
        //}     

         //Verify naviLinks text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks); 
        //method getNavLinksText taken from the home.page.ts file   
         expect(await homePage.getNavLinksText()).toEqual(expectedLinks);     
    });

});
 