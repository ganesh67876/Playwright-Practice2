import { test, expect } from '@playwright/test';
import process from 'process';

test('Verify multiple elements are displayed @multiple', async ({ page }) => {

    await page.goto('/');

    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);
    await page.locator('#login-button').click();

    await expect(page.getByText('Products', { exact: true })).toBeVisible();

    const products = page.locator('.inventory_item');

    const backpack = products.filter({
        hasText: 'Sauce Labs Backpack'
    });

    const bikeLight = products.filter({
        hasText: 'Sauce Labs Bike Light'
    });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();

    await bikeLight.getByRole('button', { name: 'Add to cart' }).click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

});