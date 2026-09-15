// @ts-check

const{test,expect} = require('@playwright/test');
test('basic auth', async({page})=>{

await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
console.log(await page.locator('div[class="example"] p').getByLabel('Congratulations! You must have the proper credentials.'));

}
)