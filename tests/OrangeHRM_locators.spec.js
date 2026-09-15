//@ts-check 

const {test, expect} = require("@playwright/test")

test('searchbylocators',async({page})=>{
    
    // Navigate to OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/')


    await page.getByPlaceholder('Username').fill('Admin') //Important
    //await page.waitForTimeout(500)
    //console.log(await page.getByLabel('Username'))

    await page.getByPlaceholder('Password').fill('admin123')
    //console.log(await page.getByLabel('Password'))
     
    await page.getByRole('button',{name:'Login'}).click()
    //await page.waitForTimeout(10000)

    //await page.getByRole('alert'),{name:'Required'}

   // await page.getByPlaceholder('Password').fill('admin123')
   // await page.getByRole('button',{name:'Login'}).click()
   // await page.waitForTimeout(1000)
    await page.getByAltText('profile picture').click()
    await page.getByRole('menuitem',{name:'Logout'}).click()
    await page.waitForTimeout(10000)
  


})