import { test, expect } from "@playwright/test";

const myElements = [
  {
    findEl: (page) => page.locator('li [href="/"]'),
    text: "Главная",
  },
  {
    findEl: (page) => page.locator('li [href="/tests/"]').nth(0),
    text: "Тесты",
  },
  {
    findEl: (page) => page.locator('li [href="/posts/"]').nth(0),
    text: "Посты",
  },
  {
    findEl: (page) => page.locator('li [href="/top/"]'),
    text: "Топы",
  },
  {
    findEl: (page) => page.locator('li [href="/news/"]'),
    text: "Библиотека",
  },
  {
    findEl: (page) => page.locator('li [href="/editor/"]'),
    text: "",
  },
];

test.describe("Тест главной страницы", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pikuco.ru/");
  });

  test("Видимость кнопок хедера", async ({ page }) => {
    for (const { findEl } of myElements) {
      await expect(findEl(page)).toBeVisible();
    }
  });

  test("Проверка названия кнопок", async ({ page }) => {
    myElements.forEach(async({ findEl, text }) => {  
      if (text) {
        await expect(findEl(page)).toHaveText(text)
      }
    })
  })

  
});
