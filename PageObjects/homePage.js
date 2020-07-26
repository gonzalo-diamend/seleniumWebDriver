

//Selectors
const loginEmail = utils.selector('input[name="username"]', utils.how.CSS);
const loginPassword = utils.selector('input[name="password"]', utils.how.CSS);
const loginButton = utils.selector ('[name="login"]')

const goToLoginPage = async (page, email, password, url) => {
    driver.get('https://practis.co.il/automation');
    driver.findElement(By.name(loginEmail)).sendKeys(email);
    driver.findElement(By.name(loginPassword)).sendKeys(password);
    driver.findElement(By.name(loginButton)).click();
 
}



module.exports = {
    goToLoginPage,

}