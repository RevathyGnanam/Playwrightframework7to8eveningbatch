/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */


import { test,Page, expect, Locator } from '@playwright/test';
import { Homepage } from '../pages/HomePage.ts'
import { RegistrationPage } from '../pages/Registration.ts'
import { RandomDataUtil } from '../utils/RandomDataUtils.ts'
import { TestConfig } from '../test.config.ts'


let homepage:Homepage;
let registrationPage:RegistrationPage;
let config:TestConfig;

test.beforeEach(async({page})=>{
config = new TestConfig();
await page.goto(config.appurl)  //navigation to url
 homepage=new Homepage(page);
 registrationPage = new RegistrationPage(page);
})

test.afterEach(async({page})=>{
    await page.waitForTimeout(5000)
    await page.close();
})

test('account registration @sanity',async()=>{

    //go to my account and click register
    await homepage.clickMyAccount()
    await homepage.clickRegister()

    //fill registration page
     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //Validate the confirmation message

    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')









})


test('account registration @smoke',async()=>{

    //go to my account and click register
    await homepage.clickMyAccount()
    await homepage.clickRegister()

    //fill registration page
     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //Validate the confirmation message

    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')









})


