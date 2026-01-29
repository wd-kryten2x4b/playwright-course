import {test, expect} from "@playwright/test";  
import { dir } from "node:console";
import { dirname } from "node:path";
const path = require('path');

test.describe('Upload large File with hardcoded wait until success message is seen', () => {

    test('should uplaod a test file', async ({ page }) => {
       
        //Open the Cart screen URL
        await page.goto('https://practice.sdetunicorns.com/cart/');

        //Store Test File path
        const filePath = path.join(__dirname, '../data/3mb-file.pdf');  

        //Upload the test file
        await page.setInputFiles('input#upfile_1', filePath);
        
        //click upload
        await page.locator('#upload_1').click ();

        //hardcode a wait - not the best method
        //await page.waitForTimeout(10000); //aviod using it in test cases
        
        //conditional wait - maybe the best way to handle loading or speed issues
        // await page.locator('#wfu_messageblock_header_1_1')
        // .waitFor({ state: 'visible', timeout: 10000 })

        //assertion - Check that the file was uploaded successfully
        //  await expect(page.locator('#wfu_messageblock_header_1_1'))
        //  .toContainText('uploaded successfully');

        //Assertion with waitwait - alternate to conditional wait
         await expect(page.locator('#wfu_messageblock_header_1_1'))
         .toContainText('uploaded successfully',{timeout: 10000});
  
    });
    
    
})
