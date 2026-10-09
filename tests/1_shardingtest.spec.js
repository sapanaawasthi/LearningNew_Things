const {test, expect} = require ('@playwright/test');
let timeout = 0;
test('TC1 -TF1',async({page})=>
{
  console.log("TestCase pass 1 for Test file1");
  await page.waitForTimeout(timeout);

}),
test('TC2 -TF1',async({page})=>
{
  console.log("TestCase pass 2 for Test file1");
  await page.waitForTimeout(timeout);

}),
test('TC3 -TF1',async({page})=>
{
  console.log("TestCase pass 3for Test file #");
  await page.waitForTimeout(timeout);

}),
test('TC4 -TF1',async({page})=>
{
  console.log("TestCase pass 4 for Test file1");
  await page.waitForTimeout(timeout);
}

);