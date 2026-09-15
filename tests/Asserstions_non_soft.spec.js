
//@ts-check

const {test,expect} = require ('@playwright/test');

test('Non and Soft assertions practice', async({page})=> {

await page.goto('https://seleniumbase.io/demo_page');
const checkbox = await page.locator('#checkBox2');
await checkbox.check();                            //Need to comment to be passed
await expect.soft(checkbox).not.toBeChecked();     //Important //not to be checked
})

test('assertions practice2', async({page})=> {
await page.goto('https://seleniumbase.io/demo_page');
const label = await page.locator('tbody tr td h1');
await expect(label).toContainText('Demo');
})

test('attribute',async({page})=>{
await page.goto('https://seleniumbase.io/demo_page');

const link = await page.locator('//a[@id="myLink1"]');
await expect(link).toHaveAttribute('href','https://seleniumbase.com');  //Important
//console.log(true);
//await page.waitForTimeout(10000);
})

test('link count in the page',async({page})=>{
await page.goto('https://seleniumbase.io/demo_page');

const links = await page.locator('a'); // a is the ancor tag before each link in the page so we can track all the links.
await expect(links).toHaveCount(7);  //Important
//console.log(true);
//await page.waitForTimeout(10000);
})
