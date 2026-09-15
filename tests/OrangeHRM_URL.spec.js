//@ts-check 

const {test, expect} = require("@playwright/test")

test('Validate OrangeHRM website',async({page})=>{
    
    // Navigate to OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    // Verify page URL
    await expect (page).toHaveURL(/orangehrmlive/);

})