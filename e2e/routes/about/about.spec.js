import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';

test('Default route should show heading first level', async ({ page }) => {
    await page.goto('/');

    // const results = await new AxeBuilder.default({ page }).analyze();

    await expect(page.locator('h1')).toBeVisible();
})

test('about should show paragraph element', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('p')).toBeVisible();
})