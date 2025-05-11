import { expect, Locator, Page, test } from "@playwright/test";

interface Element {
  locator: (page: Page) => Locator;
  name: string;
  text?: string; // text может быть необязательным
  attribute: string; // атрибут для ссылки или кнопки
}

export class MainPage {
  readonly page: Page;
  readonly elements: Element[];

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Playwright logo Playwright" }),
        name: "Playwright logo",
        text: "Playwright",
        attribute: "/",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "API" }),
        name: "API link",
        text: "API",
        attribute: "/docs/api/class-playwright",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("button", { name: "Node.js" }),
        name: "Node.js link",
        text: "Node",
        attribute: "#",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Community" }),
        name: "Community link",
        text: "Community",
        attribute: "/community/welcome",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "GitHub repository" }),
        name: "GitHub repository button",
        attribute: "https://github.com/microsoft/playwright",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Discord server" }),
        name: "Discord server button",
        attribute: "https://aka.ms/playwright/discord",
      },
    ];
  }

  async openMyPage() {
    await this.page.goto('https://playwright.dev/');
  }

  async checkElementsToVisible() {
    for (const { locator } of this.elements) {
      await expect.soft(locator(this.page)).toBeVisible();
    }
  }

  async checkElementsToText() {
    for (const { locator, name, text } of this.elements) {
      if (text) { // Проверяем, есть ли текст для проверки
          await expect(locator(this.page)).toContainText(text); // Проверка содержания текста
      }
    }
  }

    async checkElementsHrefAtributes() {
      for (const { locator, attribute } of this.elements) {
          await expect(locator(this.page)).toHaveAttribute('href', attribute ); //Проверка содержания атрибута 
      }
    }

    async checkLiteMod() {
        await this.page.locator(".toggleButton_gllP").click(); // Клик на темную тему
    }

    async checkDataThemeAttribute() {
      await expect.soft(this.page.locator("HTML")).toHaveAttribute('data-theme', 
      'dark')
    }
}
