import { test as base } from '@playwright/test';
import { MainPage } from '../models/maimModels.spec';


// Declare the types of your fixtures.
export type MyFixtures = {
  mainPage: MainPage;
};
// Extend base test by providing "mainPage" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.openMyPage();

    await use(mainPage)
  }
})
export { expect } from '@playwright/test';