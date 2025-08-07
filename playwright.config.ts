import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
  },
  projects: [
    { name: 'smoke', testMatch: '**/smoke/**/*.spec.ts' },
    { name: 'regression', testMatch: '**/regression/**/*.spec.ts' },
  ],
});