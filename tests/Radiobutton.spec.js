

import {test,expect} from "@playwright/test";
test ('radiobutton practice', async({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form");
    //await page.locator(//input[@id='gender-radio-1'])[1].click();
    await page.locator('css=#gender-radio-1').click();
    await page.locator('//input[@id="gender-radio-2"]').click();

    await page.locator('//input[@id="hobbies-checkbox-1"]').click();
    await page.locator('//input[@id="hobbies-checkbox-3"]').check();
    await page.locator('//input[@id="hobbies-checkbox-1"]').uncheck();
    await page.getByLabel('Name');
    //await page.getByAltText('profile picture').click()  
    await page.waitForTimeout(10000)




} )