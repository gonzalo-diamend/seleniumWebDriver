const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

//Selectors
const do1Button = 'button[id="do1"]';
const do2Button = 'button[id="do2"]';
const do1DisabledButton = 'button[id="do1"]:disabled';
const do2DisabledButton = 'button[id="do2"]:disabled';
const increaseButton = 'button[id="btnIncreaseFont"]';
const decreaseButton = 'button[id="btnDecreaseFont"]';
const textSize = '[id="textFontSize"]';
const changeColorField = '[id="bgColor"]';
const colorButton = 'button[id="btnSetBgColor"]';
const backgroundColor = '[id="formToColorize"]'


const clickInDoButtons= async () => {
    console.log('Step 2')
    await driver.findElement(By.id(do1Button)).click();
    expect(driver.findElement(By.id(do2DisabledButton)));
    await driver.findElement(By.id(do2Button)).click();
    expect(driver.findElement(By.id(do1DisabledButton)));
}

const increaseFontSize= async () => {
    console.log('Step 3')
    await driver.findElement(By.id(increaseButton)).click();
    await driver.findElement(By.id(textSize)).getSize();
    console.log(getSize)
    await driver.findElement(By.className(decreaseButton)).click();
    await driver.findElement(By.id(textSize)).getSize();
    console.log(getSize)
}

const changeBackgroundColor= async (colorNumber) => {
    console.log('Step 4')
    await driver.findElement(By.id(changeColorField)).sendKeys(colorNumber);
    await driver.findElement(By.id(colorButton)).click();
    expect(driver.findElement(By.id(backgroundColor)).getCssValue("background"));
}


module.exports = {
    clickInDoButtons,
    increaseFontSize,
    changeBackgroundColor
}