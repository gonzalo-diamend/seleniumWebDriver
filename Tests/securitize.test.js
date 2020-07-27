const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

const homePage = require('./page-objects/homePage.js');
const mainPage = require('./page-objects/mainPage.js');



// Test data
const loginEmail = 'admin';
const loginPassword = 'admin';
const url = 'https://practis.co.il/automation/main.html';
const colorNumber = '#303'



// Scenarios test
describe('SecuritizeTest', () => {
    driver = new Builder().forBrowser('chrome').build();
  });

   it('Login into the page', async () => {
       await homePage.goToLoginPage(loginEmail, loginPassword, url);
});

    it('Click in do Buttons', async () => {
       await mainPage.clickInDoButtons();

});

    it('Change font text', async () => {
        await mainPage.increaseFontSize();

});

    it('Change Backgroun color', async () => {
        await mainPage.changeBackgroundColor(colorNumber);

});

