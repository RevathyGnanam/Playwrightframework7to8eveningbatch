import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { MyAccountPage } from '../pages/MyAccountPage';
import { Homepage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

let config: TestConfig;
let accpage: MyAccountPage;
let homepage: Homepage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appurl); //navigation to the app url
    homepage = new Homepage(page);
    loginPage = new LoginPage(page);
    accpage = new MyAccountPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.close();

})

test('Login using test config file @master',async({page})=>{

     //go to my account and click register
    await homepage.clickMyAccount()
    await homepage.clickLogin()

    //enter the valid credentails

    await loginPage.setEmail(config.email)
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();


     await page.waitForTimeout(5000)

    //alternatively
    //await loginPage.login(config.email,config.password)

    //verify successfull
    const isloggin = await accpage.isMyAccountPageExists();
    expect(isloggin).toBeTruthy();

    console.log(await accpage.getPageTitle())




})



