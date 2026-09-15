// @ts-check

const{test,expect} = require('@playwright/test');

// Important Annotations: Skip, Fail, Fixme, Only, Slow
test('Verify Username', async({page})=>{ 
test.fail();
await page.goto('https://the-internet.herokuapp.com/login')
await page.locator('//input[@id="username"]').fill('tomsmith');
//await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
//await page.locator('//i[@class="fa fa-2x fa-sign-in"]').click();
//await page.waitForTimeout(10000);
//await page.getByLabel(' You logged into a secure area!');
}
)

test('passord', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/login')
//await page.locator('//input[@id="username"]').fill('tomsmith');
await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
//await page.locator('//i[@class="fa fa-2x fa-sign-in"]').click();
await page.waitForTimeout(10000);
//await page.getByLabel(' You logged into a secure area!');
}
)



test('login button', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/login')
//await page.locator('//input[@id="username"]').fill('tomsmith');
//await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
await page.locator('//i[@class="fa fa-2x fa-sign-in"]').click();
await page.waitForTimeout(10000);
//await page.getByLabel(' You logged into a secure area!');
}
)