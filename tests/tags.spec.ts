import{test, expect} from '@playwright/test';
import process from 'process';

test('verifying the login @smoke', async({page})=>{

    await page.goto('/')
    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME!);
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD!);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory\.html/);

})

test('Verify products are displayed @regression', async({page})=>{

    await page.goto('/inventory.html')  
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
})

test('Add two products and verify cart count @cart', async({page})=>{

    await page.goto('/inventory.html')  
    await page.locator('button[name="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('button[name="add-to-cart-sauce-labs-bike-light"]').click()
    await expect(page.locator('span').filter({ hasText: '2' }).first()).toBeVisible()
})