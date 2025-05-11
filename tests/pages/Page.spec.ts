import { test, Locator, Page } from "@playwright/test"
import { MainPage } from "../models/maimModels.spec.ts";

let mainPage :  MainPage

test.describe("Тесты гл страницы", () => {
  test.beforeEach(async ({ page }) => {
     mainPage = new MainPage(page)
   await page.goto("https://playwright.dev/");
  });

  test("Проверка отображения элемента", async ({ page }) => {
  await mainPage.openMyPage()
  await mainPage.checkElementsToVisible()
  }),


    test("Проверка содержимого кнопки", async ({ page }) => {
      await mainPage.openMyPage()
      await mainPage.checkElementsToText()
    });


  test("Проверка атрибутов href", async ({ page }) => {
    await mainPage.openMyPage()
    await mainPage.checkElementsHrefAtributes()
  });

  test("Проверка лайт мода", async ({ page }) => {
    await test.step('Нажатие на иконку лайт мода', async() => {
      await mainPage.checkLiteMod();  
    })
    await test.step('Проверка смены значения атрибута', async() => {
      await mainPage.checkDataThemeAttribute(); 
    })
  });

 });

 





  

