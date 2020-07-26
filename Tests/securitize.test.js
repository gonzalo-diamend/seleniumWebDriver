const {webdriver, Builder, By, Key, until} = require('selenium-webdriver'),
// test = require('selenium-webdriver/testing'),
assert = require('assert');

// Test data
const loginEmail = 'admin'
const loginPassword = 'admin'
const url = 'https://practis.co.il/automation/main.html'

let driver;

test.describe('SecuritizeTest', function() {
  test.before(function *() {
    driver = new Builder().forBrowser('chrome').build();
  });

   test.it('Login into the page', function() {

  });

    test.it('Click in do Buttons', function() {

});

    test.it('Change font text', function() {

});

    test.it('Change Backgroun color', function() {

});



  test.after(() => driver.quit());
});