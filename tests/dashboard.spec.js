import { test, expect } from '@playwright/test';

// New isolated browser context for each test (no shared localStorage state).
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill('demo@northstar.test');
  await page.getByLabel('Password').fill('Demo123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome, Demo User' })).toBeVisible();
});

test('adds a task and shows a count', async ({ page }) => {
  await page.getByLabel('New task').fill('Verify checkout flow');
  await page.getByRole('button', { name: 'Add task' }).click();
  await expect(page.getByText('Verify checkout flow')).toBeVisible();
  await expect(page.locator('#task-count')).toHaveText('1 task');
});

test('rejects an empty task title', async ({ page }) => {
  await page.getByRole('button', { name: 'Add task' }).click();
  await expect(page.getByRole('alert')).toHaveText('Please enter a task title.');
  await expect(page.locator('#task-count')).toHaveText('0 tasks');
});

test('marks a task complete and filters it', async ({ page }) => {
  await page.getByLabel('New task').fill('Test release workflow');
  await page.getByRole('button', { name: 'Add task' }).click();
  await page.getByRole('checkbox', { name: 'Complete Test release workflow' }).check();
  await page.getByRole('button', { name: 'Open', exact: true }).click();
  await expect(page.getByText('Test release workflow')).toHaveCount(0);
  await page.getByRole('button', { name: 'Completed', exact: true }).click();
  await expect(page.getByText('Test release workflow')).toBeVisible();
});

test('keeps tasks after a page reload', async ({ page }) => {
  await page.getByLabel('New task').fill('Review invoice export');
  await page.getByRole('button', { name: 'Add task' }).click();
  await page.reload();
  await expect(page.getByText('Review invoice export')).toBeVisible();
});

test('saves display name and persists it', async ({ page }) => {
  await page.getByLabel('Display name').fill('Taylor QA');
  await page.getByRole('button', { name: 'Save profile' }).click();
  await expect(page.getByRole('status')).toHaveText('Profile saved.');
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Welcome, Taylor QA' })).toBeVisible();
});

test('deletes a task', async ({ page }) => {
  await page.getByLabel('New task').fill('Remove old item');
  await page.getByRole('button', { name: 'Add task' }).click();
  await page.getByRole('button', { name: 'Delete Remove old item' }).click();
  await expect(page.getByText('Remove old item')).toHaveCount(0);
  await expect(page.locator('#task-count')).toHaveText('0 tasks');
});
