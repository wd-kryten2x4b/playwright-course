import {test, expect} from "@playwright/test"
import ContactPage from "../pages/contact.page";
import {faker} from '@faker-js/faker/locale/nb_NO'; 
import { styleText } from "util";


test.describe('Contact', () => {
    //new variable
    let contactPage: ContactPage;

    //Go to Contact screen and fillin the form then submit it and verify the confirmation
        test('Go to Contact Page', async ({ page }) => {
        contactPage = new ContactPage(page);

        //Open HomePage
        //await page.goto('https://practice.sdetunicorns.com/');
        await contactPage.navigateMain();


        //Find the conatct Link and click it
        await contactPage.contactLink.click(); //Primary nav block and Link Id starts with menu 

        //Add the Playwright Inspector code
        //await page.pause(); 
        
        //fill in the relevant fields
        // await contactPage.nameField.fill('William Devitt');
        // await contactPage.emailField.fill('Noway@noway.com');
        // await contactPage.numberField.fill('+4412345678');
        // await contactPage.messageField.fill('This is the message for Exercise Contact Page');

        // //click Submit button
        // await contactPage.submitBtn.click()

        //fill out the input fields and submit
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(),
                                     faker.phone.number({ style: 'international' }), faker.lorem.lines(1))

        //Submit confirmation banner is visible
        await expect(contactPage.confirmMsg).toHaveText('Thanks for contacting us! We will be in touch with you shortly');  
        console.log("Submit Banner is displayed")

    });  

});
 