import{test,expect}from'@playwright/test';

test('verifying the invetory1', async({page})=>{

    await page.goto('/inventory.html')
    await expect(page.getByText('Products')).toBeVisible()
    await expect(page.locator('div.inventory_list')).toHaveCount(1);
    await page.locator('button[name="add-to-cart-sauce-labs-backpack"]').click()
    await expect(page.locator('span').filter({ hasText: '1' }).first()).toBeVisible()
})