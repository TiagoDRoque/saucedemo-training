import { Page } from '@playwright/test';
import { Data } from '../config/Data';

export class BasePage {  
  readonly page: Page;
  protected readonly baseUrl: string;
  
  constructor(page: Page) {
    this.page = page;
    this.baseUrl = Data.baseUrl ?? '';
  }
  async navigateToLoginPage() {
      await this.page.goto(`${this.baseUrl}/v1/`);
  }
}