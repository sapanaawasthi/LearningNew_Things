const {test, expect} = require ('@playwright/test');
test.skip('verifyTest1',async ({page})=>
{
    await page.goto ('https://www.google.com');
    await expect(page).toHaveTitle('Google');
  
    const searchBox = page.locator('textarea[name="q"]');
    await expect(searchBox).toBeVisible();

    const searchTitleValue = await searchBox.getAttribute('name');
    console.log(searchTitleValue);
    expect(searchTitleValue).toBe('q');

    const aboutlink =  page.getByRole('link', { name: 'About' }).first(); 
    await expect(aboutlink).toBeVisible();
    const value1= await aboutlink.textContent();
    console.log("link text print:",value1); 
    })

test.skip('verifyTest2',async ({page})=>
{
  
   await page.goto ('https://www.facebook.com/');
   const actualTitle = await page.title();
   
   console.log("The browser title is:",actualTitle);
   await expect(page).toHaveTitle('Facebook'); 

}

)

test.skip ('Verify test 3',async ({page})=>
{
 await page.goto("https://www.myntra.com/");
 const pageTittle =await page.title();
 console.log("browserTitle is :" ,pageTittle);
 await expect (page).toHaveTitle('Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra');

}
)

test.skip ('Verify test 4',async ({page})=>
{
 await page.goto("https://www.flipkart.com//");
 const pageTittle1 =await page.title();
 console.log("browserTitle is :" ,pageTittle1);
 await expect (page).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com');

}
)