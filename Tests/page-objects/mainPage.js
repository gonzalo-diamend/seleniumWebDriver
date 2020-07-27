const {By} = require('selenium-webdriver');

//Selectors
const do1Button = 'button[id="do1"]';
const do2Button = 'button[id="do2"]';
const do1DisabledButton = 'button[id="do1"]:disabled';
const do2DisabledButton = 'button[id="do2"]:disabled';
const increaseButton = 'button[id="btnIncreaseFont"]'
const decreaseButton = 'button[id="btnDecreaseFont"]'
const textSize


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
    driver.findElement(By.id(textSize)).getSize();
    console.log(getSize)
    await driver.findElement(By.className(decreaseButton)).click();
    driver.findElement(By.id(textSize)).getSize();
    console.log(getSize)
 
}

const changeBackgroundColor= async () => {

 
}


module.exports = {
    clickInDoButtons,
    increaseFontSize,
    changeBackgroundColor
}