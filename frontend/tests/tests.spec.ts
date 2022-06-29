import { test, expect } from "@playwright/test";

test.describe('Products', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  })

  test("create product", async ({ page }) => {

    // Click [placeholder="Product name\.\.\."]
    await page.locator('[placeholder="Product name\\.\\.\\."]').click();

    // Fill [placeholder="Product name\.\.\."]
    await page
      .locator('[placeholder="Product name\\.\\.\\."]')
      .fill("New product");

    // Press Tab
    await page.locator('[placeholder="Product name\\.\\.\\."]').press("Tab");

    // Fill [placeholder="Product price\.\.\."]
    await page.locator('[placeholder="Product price\\.\\.\\."]').fill("123");

    // Click text=Add
    await page.locator("text=Add").click();

    await page.goto("http://localhost:3000/");

    await expect(page.locator("text=New product123")).toHaveCount(1);
  });


  test('update product', async ({ page }) => {
  
    // Click text=New product123 krXEdit >> button >> nth=1
    await page.locator('text=New product123 krXEdit >> button').nth(1).click();
  
    // Click text=New values:Submit changes >> input[type="text"]
    await page.locator('text=New values:Submit changes >> input[type="text"]').click();
  
    // Press a with modifiers
    await page.locator('text=New values:Submit changes >> input[type="text"]').press('Meta+a');
  
    // Fill text=New values:Submit changes >> input[type="text"]
    await page.locator('text=New values:Submit changes >> input[type="text"]').fill('Edited product');
  
    // Press Tab
    await page.locator('text=New values:Submit changes >> input[type="text"]').press('Tab');
  
    // Fill text=New values:Submit changes >> input[type="number"]
    await page.locator('text=New values:Submit changes >> input[type="number"]').fill('321');
  
    // Click text=Submit changes
    await page.locator('text=Submit changes').click();

    await page.goto("http://localhost:3000/");

    await expect(page.locator("text=New product123")).toHaveCount(0);
    await expect(page.locator("text=Edited product321")).toHaveCount(1);
    
  });

  test('delete product', async ({ page }) => {
  
    // Click text=Edited product321 krXEdit >> button >> nth=0
    await page.locator('text=Edited product321 krXEdit >> button').first().click();

    await page.goto("http://localhost:3000/");

    await expect(page.locator("text=New product123")).toHaveCount(0);
    await expect(page.locator("text=Edited product321")).toHaveCount(0);
  
  });


});
