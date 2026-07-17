const { test, expect } = require('@playwright/test');

test('guide renders without browser errors', async ({ page }) => {
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Lesson 1 — Learn the Core Game/i })).toBeVisible();
  await expect(page.locator('#guideNav a')).toHaveCount(await page.locator('#guideContent h1, #guideContent h2, #guideContent h3').count());
  expect(errors).toEqual([]);
});

test('all fragment links have targets', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Lesson 1/i })).toBeVisible();
  const missing = await page.locator('a[href^="#"]').evaluateAll(links => links
    .map(a => a.getAttribute('href'))
    .filter(href => href && href !== '#' && !document.querySelector(href)));
  expect(missing).toEqual([]);
});

test('search, theme, and mobile navigation work', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Lesson 1/i })).toBeVisible();
  await page.getByRole('button', { name: 'Search guide' }).click();
  await page.locator('#searchInput').fill('jack out');
  await expect(page.locator('.search-result').first()).toBeVisible();
  await page.keyboard.press('Escape');

  const before = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: 'Switch color theme' }).click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', before);

  if (isMobile) {
    await page.getByRole('button', { name: 'Open guide navigation' }).click();
    await expect(page.locator('#sidebar')).toHaveClass(/open/);
    await page.getByRole('button', { name: 'Close guide navigation' }).click();
    await expect(page.locator('#sidebar')).not.toHaveClass(/open/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  }
});
