import{test, expect} from '@playwright/test';
import process from 'process';

test('verifying multiple products @smoke', async ({ page }) => {    
        
    await page.goto('/');
    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
    const backpack = products.nth(0)
    const bikeLight = products.last()
    const tShirt = products.nth(2)
    await expect(backpack).toBeVisible();
    await expect(bikeLight).toBeVisible();
    await expect(tShirt).toBeVisible();
    const names = await page.locator('.inventory_item_name').all();
    for (const name of names) {
        console.log(await name.textContent());
    }
    

})