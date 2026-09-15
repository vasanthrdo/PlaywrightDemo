//@ts-check 
// const {test, expect} = require("@playwright/test")
import {test,expert} from '@playwright/test';
import { link } from 'fs';
test ('filter practice',async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(10000)
    //await page.getByAltText("profile picture").click();
    await page.getByRole("listitem").filter({hasText:"Admin"}).click(); //Important // instead /Leave/
    await page.getByRole("listitem").filter({hasText:"Leave"}).click();  //Important
    await page.waitForTimeout(10000)
    await page.getByRole("listitem").filter({hasText:"Apply"}).click();  //Important
    await page.waitForTimeout(10000)
    //await page.getByRole('menuitem',{name:"Logout"}).click(); //Important

})
