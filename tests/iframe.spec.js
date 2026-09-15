//@ts-check


//iframe Code not working
const {test,expect} = require('@playwright/test');
test('iframe practice', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/iframe');
const FrameArea = await page.frameLocator('mce_0_ifr').locator('tinymce');
await FrameArea.fill('iframe practice');
await expect(FrameArea).toHaveText('Sample content');
await page.waitForTimeout(10000);

}


)