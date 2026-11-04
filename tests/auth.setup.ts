import {test as setup, expect} from '@playwright/test';

setup('Verify the login page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory\.html/);

    await page.context().storageState({ path: 'playwright/.auth/user.json' });
})