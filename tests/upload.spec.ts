import {test, expect} from "@playwright/test";  
import { dir } from "node:console";
import { dirname } from "node:path";
import CartPage from "../pages/cart.page";
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['3mb-file.pdf', '6mb-file.pdf']

    for (const name of fileName) {

    test(`should uplaod a ${name} file`, async ({ page }) => {
        cartPage = new CartPage(page);
       
        //Open the Cart screen URL
        await cartPage.uploadComponent().navigateCart();
        

        //Store Test File path
        const filePath = path.join(__dirname, `../data/${name}`);  

        //Upload the test file
        //await page.setInputFiles('input#upfile_1', filePath);

        //click upload
        //await page.locator('#upload_1').click ();

        //Above section, Store Test File Path, replaced with details from 
        // uploadComponent.ts file
        await cartPage.uploadComponent().uploadFile(filePath);
        await cartPage.uploadComponent().submitBtn.click();

        //assertion - Check that the file was uploaded successfully 
         await expect(cartPage.uploadComponent().successTxt)
            .toContainText('uploaded successfully', {timeout: 10000});
  
    });

    }

    
    
})
