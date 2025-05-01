import { test, expect, Locator, Page } from "@playwright/test";

interface Elementt {
  locator: (page: Page)=> Locator;
  name: string
  text?: string
  atttibute?: any
}


const arrayElements: Elementt[] = [
  {
    locator: (page: Page): Locator =>
      page.getByRole("link", { name: "Playwright logo Playwright" }),
    name: "Playwright logo",
    text: "Playwright",
    atttibute: "/",
  },
  {
    locator: (page: Page): Locator =>
       page.getByRole("link", { name: "API" }),
    name: "API link",
    text: "API",
    atttibute: "/docs/api/class-playwright",
  },
  {
    locator: (page: Page): Locator =>
       page.getByRole("button", { name: "Node.js" }),
    name: "Node.js link",
    text: "Node",
    atttibute: "#",
  },
  {
    locator: (page: Page): Locator =>
       page.getByRole("link", { name: "Community" }),
    name: "Community link",
    text: "Community",
    atttibute: "/community/welcome",
  },
  {
    locator: (page: Page): Locator =>
       page.getByRole("link", { name: "GitHub repository" }),
    name: "GitHub repository button",
    atttibute: "https://github.com/microsoft/playwright",
  },
  {
    locator: (page: Page): Locator =>
       page.getByRole("link", { name: "Discord server" }),
    name: "Discord server button",
    atttibute: "https://aka.ms/playwright/discord",
  },
];


test.describe("Тесты гл страницы", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("Проверка отображения кнопок хедера", async ({ page }) => {
    arrayElements.forEach(({ locator, name }) => {
      test.step(name, async () => {
        await expect(locator(page)).toBeVisible(); //Проверка видимости элементов
      });
    });
  }),


    test("Проверка содержимого кнопок", async ({ page }) => {
      arrayElements.forEach(async({ locator, text, name}) => {
        test.step(name, async() => { 
        if (text) {
            await expect(locator(page)).toContainText(text); //Проверка содержания текста (Именно содержания)
        }
      })
      })

    });


  test("Проверка атрибутов href", async ({ page }) => {
    arrayElements.forEach(({ locator, name, atttibute }) => {
      test.step(name, async () => {
        await expect(locator(page)).toHaveAttribute('href', atttibute ); //Проверка содержания атрибута 
      });
    });
  });


  test("Проверка фона гл страницы", async ({ page }) => {
    await page.locator(".toggleButton_gllP").click(); // Клик на темную тему
    await expect(page.locator("HTML")).toHaveAttribute("data-theme", "dark"); // Проверка темной темы после клика
  });


});









