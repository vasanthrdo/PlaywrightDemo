const{test,expect} = require('@playwright/test');

//Get request
// test('API test', async ({ request }) => {

//     const response = await request.get('https://reqres.in/api/users/2');

//     expect(response.ok()).toBeTruthy();

// post request

test('GET /posts/1 returns expected shape', async ({ request }) => {
  const response = await request.get('');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
});

