
//@ts-check 

const {test, expect} = require("@playwright/test")

test('Validate OrangeHRM website',async({page})=>{
    
    // Navigate to OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    // Verify page title
    await expect (page).toHaveTitle(/OrangeHRM/);

})