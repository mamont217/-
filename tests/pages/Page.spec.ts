import { test, expect } from '../fixtures/mainPage.ts'
//import { test } from "@playwright/test"
import { MainPage } from "../models/maimModels.spec.ts";

test.describe("Тесты гл страницы", () => {

  test("Проверка отображения элемента", async ({ mainPage }) => {
  await mainPage.openMyPage()
  await mainPage.checkElementsToVisible()
  }),


    test("Проверка содержимого кнопки", async ({ mainPage }) => {
      await mainPage.openMyPage()
      await mainPage.checkElementsToText()
    });


  test("Проверка атрибутов href", async ({ mainPage }) => {
    await mainPage.openMyPage()
    await mainPage.checkElementsHrefAtributes()
  });

  test("Проверка лайт мода", async ({ mainPage }) => {
    await test.step('Нажатие на иконку лайт мода', async() => {
      await mainPage.checkLiteMod();  
    })
    await test.step('Проверка смены значения атрибута', async() => {
      await mainPage.checkDataThemeAttribute(); 
    })
  });

 });

 





  

