// @ts-check

import {test,expect} from "@playwright/test";
test.skip ('select file',async({page})=>{

await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
await page.locator('//input[@id="upload"]').setInputFiles("C:/Users/MANOSARAN/OneDrive/Pictures/Teacher's day drawing.jpeg");
await page.waitForTimeout(10000);
 
}
)


test.skip('select multiple file',async({page})=>{

await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
await page.locator('//input[@id="ajaxUpload"]').setInputFiles(["C:/Users/MANOSARAN/OneDrive/Pictures/Teacher's day drawing.jpeg",
    "C:/Users/MANOSARAN/OneDrive/Pictures/PXL_20221119_061246134.jpg"]);
await page.waitForTimeout(10000);
 
})

test ('buffer file',async({page})=>{

await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
await page.locator('//input[@id="upload"]').setInputFiles({                     //temporarily storing a file in run time

name: 'Playwright.txt',
mimeType:'text/plain',
buffer: Buffer.from('this is a test')

}    )
await page.waitForTimeout(10000);
 
}
)


// If you don't have input element in hand (it is created dynamically), you can handle the page.on('filechooser') event or use a corresponding waiting method upon your action:

// Start waiting for file chooser before clicking. Note no await.
// const fileChooserPromise = page.waitForEvent('filechooser');
// await page.getByLabel('Upload file').click();
// const fileChooser = await fileChooserPromise;
// await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));