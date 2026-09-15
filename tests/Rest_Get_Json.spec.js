

const{test,expect} = require('@playwright/test');  //difficult to understand the logic

test('Asserting Complex Json response',async({page})=> {

const url = 'https://jsonplaceholder.typicode.com/posts';

const response = await page.request.get(url);
await expect(response).toBeOK();
const users = await response.json();
await expect (users.length).toBeGreaterThan(0);
await expect (users[0].id).toBe(1);
})