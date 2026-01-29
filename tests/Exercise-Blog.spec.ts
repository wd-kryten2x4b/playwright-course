import {test, expect} from "@playwright/test"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { count } from "console";
import BlogPage from "../pages/blog.page";

test.describe('Blog', () => {

  //new variable for the blog.page.ts
  let blogPage: BlogPage;

    /*Go to Blog screen and count amount of recent blogs and verify that each recnet 
      blog is at least 10 characters long    
    */
        test('Go to Blog Page and verify recent blogs', async ({ page }) => {
          blogPage = new BlogPage(page);

        //Open HomePage
        await blogPage.navigateMain();

        //Find the Blog Link and click it
        await blogPage.blogLink.click(); //Primary nav block and Link Id starts with menu
        

        //Get the Recent blog list and verify amount of recent blogs there are
        //const recentBlogList = await blogPage.blogRecent; //also used section#recent-posts-3 ul li


        //Wait for list items to be loaded
        await blogPage.blogRecent.first().waitFor();

        //check the length of the recent post list
        expect(await blogPage.blogRecent.count()).toEqual(5);

        //loop through the list
        for (const el of await blogPage.blogRecent.elementHandles()) {


          expect((await el.textContent())!.trim().length).toBeGreaterThanOrEqual(5)
          //Print Out trimmed version
          //console.log(await el.textContent());
        };

    });

});
 