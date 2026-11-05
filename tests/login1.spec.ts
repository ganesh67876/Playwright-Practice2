import { test, expect } from '@playwright/test';
import process from 'process';

test('verifying the login @smoke', async ({ page }) => {

    await page.goto('/');

    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory\.html/);

    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

});