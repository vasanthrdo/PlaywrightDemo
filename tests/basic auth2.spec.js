// Step 1: Define the basic auth credientials
//Step 2: Encode the credientials as base 64 string
//Step 3: Setup a request interseptor to handle the basic auth
//Step 4: Aserting the results
// @ts-check

//const{test,expect} = require('@playwright/test');

import{test,expect} from '@playwright/test';

test('basic auth tech', async({page})=>{
//Step 1
const username = 'admin';
const password = 'admin';
//Step 2
const base64credientials = Buffer.from(`${username}:${password}`).toString('base64');
//Step 3
await page.route('**/*',(route)=>{
    const headers ={
        'Authorization':`Basic ${base64credientials}`,
    };
    route.continue({headers});
});

await page.goto('https://the-internet.herokuapp.com/basic_auth');
console.log(await page.locator('div[class="example"] p').getByLabel('Congratulations! You must have the proper credentials.'));
await page.waitForTimeout(10000);




})