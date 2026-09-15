
const{test,expect} = require ('@playwright/test');
test('Multiple valuedropdown', async({page})=>{

await page.goto('https://chercher.tech/practice/dropdowns');
await page.locator('//select[@id="second"]').selectOption([{index : 0},{index :1}]);  //  (['Pizza','Burger']);
await page.waitForTimeout(10000);



}

)


