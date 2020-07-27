const homePage = require('./page-objects/homePage.js');
const mainPage = require('./page-objects/mainPage.js');


// Test data
const loginEmail = 'admin'
const loginPassword = 'admin'
const url = 'https://practis.co.il/automation/main.html'

let driver;


// Scenarios test
describe('SecuritizeTest', () => {
    driver = new Builder().forBrowser('chrome').build();
  });

   it('Login into the page', async () => {
       await homePage.goToLoginPage(loginEmail, loginPassword, url);
});

//     it('Click in do Buttons', async () => {
//         mainPage.goToLoginPage();

// });

//     it('Change font text', async () => {

// });

//     it('Change Backgroun color', async () => {

// });

