//tc@check

const{test,expect} = require('@playwright/test');
test.skip('Simple alerts',async({page})=>{

    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    await page.on('dialog', async(a)=>{         // asking to trigger a event which is a dialog & introducting a async variable & call by fucntion
    console.log(await a.message());             // code: on the popup we need to trigger a event to see the text then only on the below code we are clicking
    a.accept();                                // to click ok in the dialog box

    })

    await page.locator('css=input[value="Alert"]').click();    //playwright will automatically handle the popup means it will close automatically
    await page.waitForTimeout(1000);

})

test.skip('Confirmation alerts',async({page})=>{

    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    await page.on('dialog', async(b)=>{         // asking to trigger a event which is a dialog & introducting a async variable & call by fucntion
    console.log(await b.message());             // code: on the popup we need to trigger a event to see the text then only on the below code we are clicking
    b.dismiss();                                // to click ok in the dialog box

    })

    await page.locator('input[value="Confirmation Box"]').click();    //playwright will automatically handle the popup means it will close automatically
    await page.waitForTimeout(10000);

})

test('Prompt alerts',async({page})=>{

    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
    await page.on('dialog', async(c)=>{         // asking to trigger a event which is a dialog & introducting a async variable & call by fucntion

    console.log(await c.message());             // code: on the popup we need to trigger a event to see the text then only on the below code we are clicking
    c.accept('Iam an indian');                                // to click ok in the dialog box
    await page.waitForTimeout(10000);


    })

    await page.locator('//input[@name="prompt"]').click();    //playwright will automatically handle the popup means it will close automatically
    await page.waitForTimeout(10000);

})