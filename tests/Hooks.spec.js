import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');
})

test.afterEach(async({page})=>{

    await page.close();
})

test('Valid login',async({page})=>{

await page.locator('//input[@id="username"]').fill('tomsmith');
await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
await page.locator('//i[@class="fa fa-2x fa-sign-in"]').click();
await page.waitForTimeout(1000);
await page.getByLabel(' You logged into a secure area!');

})

test('Invaild login',async({page})=>{

await page.locator('//input[@id="username"]').fill('tomsmith2');
await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
await page.locator('//i[@class="fa fa-2x fa-sign-in"]').click();
await page.waitForTimeout(10000);
await expect(page.getByText('Your username is invalid!')).toBeVisible();
//await page.locator('//div[@id="flash"]','Your username is invalid!');

//await page.getByLabel(' You logged into a secure area!');

})