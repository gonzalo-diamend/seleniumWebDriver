const {By} = require('selenium-webdriver');

//Selectors

const loginEmail = By.name('[name="username"]');
const loginPassword = By.name('[name="password"]');
const loginButton = By.name('[name="login"]');


// Methods

const goToLoginPage = async (email, password, url) => {
    console.log('Step 1')
    await driver.get('https://practis.co.il/automation');
    await driver.findElement(By.name(loginEmail)).sendKeys(email);
    await driver.findElement(By.name(loginPassword)).sendKeys(password);
    await driver.findElement(By.name(loginButton)).click();
    await driver.getCurrentUrl(url);
 
}



module.exports = {
    goToLoginPage,
}