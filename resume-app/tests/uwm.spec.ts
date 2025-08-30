import { test, expect } from '@playwright/test';

// This test verifies the UWM image/button navigates to the expected URL when clicked.
// It assumes the Career page is at "/" and renders the UWMImage component.

const UWM_URL = 'https://uwm.edu/';

test.describe('Career page', () => {
  test('clicking UWM image/button navigates to uwm.edu (opens new URL)', async ({ page }) => {
    await page.goto('/');

    // Click the image by its alt text; it sits inside a button so this triggers the click.
    const img = page.getByAltText('UWM');
    await expect(img).toBeVisible();
    await img.click();
    await page.waitForURL(UWM_URL);
    await expect(page).toHaveURL(UWM_URL);
  });
});
