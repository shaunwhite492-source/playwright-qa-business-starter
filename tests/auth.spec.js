import { test, expect } from '@playwright/test';

const validEmail = 'demo@northstar.test';
const validPassword = 'Demo123!';

test('signs in with demo account and signs out', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill(validEmail);
  await page.getByLabel('Password').fill(validPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome, Demo User' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in to your workspace' })).toBeVisible();
});

test('rejects incorrect demo credentials', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill(validEmail);
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('alert')).toHaveText('Invalid demo email or password.');
  await expect(page.getByRole('heading', { name: 'Sign in to your workspace' })).toBeVisible();
});

test('requires both login fields', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('alert')).toHaveText('Email and password are required.');
});
