import {test, expect} from "@playwright/test";  
import { dir } from "node:console";
import { dirname } from "node:path";
const path = require('path');

test.describe('Upload File', () => {

    test('should uplaod a test file', async ({ page }) => {
       
        //Open the Cart screen URL
        await page.goto('https://practice.sdetunicorns.com/cart/');

        //Store Test File path
        const filePath = path.join(__dirname, '../data/appium.png'); 

        //DOM updates
        await page.evaluate(()=>{
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
            selector.className =''
            }
        })

        //Upload the test file
        await page.setInputFiles('input#upfile_1', filePath);


        //click upload
        await page.locator('#upload_1').click ();

        //assertion - Check that the file was uploaded successfully 
         await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');
  
    });
    
    
})
