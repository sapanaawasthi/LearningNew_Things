import { test, expect } from '@playwright/test';

test.describe('E-commerce Workflow Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to a demo e-commerce site before each test
    await page.goto('https://saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  });

  test('Verify home page inventory loading', async ({ page }) => {
    await expect(page.locator('.inventory_list')).toBeVisible();
    const items = page.locator('.inventory_item');
    await expect(items).toHaveCount(6);
  });

  test('Add items to the shopping cart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });

  test('Complete a successful checkout checkout', async ({ page }) => {
    // Add item & navigate to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // Fill form
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    // Finish
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
