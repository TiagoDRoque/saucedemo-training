import { Page } from '@playwright/test';
import { Data } from '../config/Data';
import { BasePage } from './base';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigateToLoginPage();
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', Data.users.standard.username ?? '');
    await this.page.fill('#password', Data.users.standard.password ?? '');
    await this.page.click('#login-button');
  }
}