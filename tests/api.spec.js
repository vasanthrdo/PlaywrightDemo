const{test,expect} = require('@playwright/test');

//Get request
test('API test', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.ok()).toBeTruthy();




});

