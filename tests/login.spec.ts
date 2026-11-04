import { test, expect } from '@playwright/test';
import process from 'process';

test('Verify the login page', async ({ page }) => {
    await page.goto('/');

    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
});