//@ts-check 

const {test, expect} = require("@playwright/test")

test('OrangeHRM CSSXPATH',async({page})=>{
    
    // Navigate to OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/')


    //await page.getByPlaceholder('Username').fill('Admin')

    await page.locator('css=input[placeholder="Username"]').fill('Admin') //Important

    await page.getByPlaceholder('Password').fill('admin123')
     
    try {
    await page.getByRole('button',{name:'Login'}).click()
    
    //await page.locator("#login").click();
     } catch (error) {
    console.log("Login button was not found");
    }
   
    await page.getByAltText('profile picture').click()
    await page.getByRole('menuitem',{name:'Logout'}).click()
    await page.waitForTimeout(10000)



})