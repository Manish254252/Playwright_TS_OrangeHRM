const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

});
After(async function () {

    await browser.close()

});

Given('user visits the web page', async function () {
    await page.goto('https://playwright.dev/');

});


When('user click link', async function () {
    await expect(page).toHaveTitle(/Playwright/);
});
