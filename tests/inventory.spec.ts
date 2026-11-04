import{test, expect} from '@playwright/test';
test('Verify the inventory page', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
})