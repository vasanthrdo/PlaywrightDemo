//@ts-check

const{test,expect} = require ('@playwright/test');
test('drag and drop', async({page})=>{

    await page.goto('https://drag-and-drop-tricks.webflow.io/');

    const sourceElement = await page.locator('div[class="draggable correct ui-draggable ui-draggable-handle"] div[class="draggable_fill"]');
    const TragetElement = await page.locator('//div[@class="quiz-option is-drop"]');

    await sourceElement.dragTo(TragetElement);
    await page.waitForTimeout(10000);



})