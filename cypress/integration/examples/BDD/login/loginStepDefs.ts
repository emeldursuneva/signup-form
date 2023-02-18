//const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
import{ Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { LoginPage } from "../../../../support/pages/LoginPage"
let loginPage = new LoginPage()



Given('User in the Eva Health login page', () => {
    loginPage.landLoginPage();

})

When('User enters invalid email', () => {

    loginPage.invalidEmailEntry();
})

Then('User sees that Email is invalid error message', () => {

    loginPage.invalidEmailMessageCheck();
})


When('User enters invalid Password', () => {

    loginPage.invalidPasswordEntry();

})


Then('User sees that Password must be at least 10 characters error message', () => {

   loginPage.invalidPasswordMessageCheck();

})



When('User enters incorrect credentials', () => {

  loginPage.incorrectCredentialsEntry();

})

Then('User sees that Username or password was incorrect, please try again error message', () => {

   loginPage.incorrectCredentialsMessageCheck();

})



When('User clicks on the Forgot Password button', () => {

    loginPage.forgotPasswordClick();

})

Then('User sees that Forgot Password page in Url',() => {

   loginPage.forgotPasswordURLCheck();

})



When('User enters an email adress',() => {

loginPage.forgotPasswordEmailEntry();

})

Then('User sees that If this is the email address for a valid account, error message', () => {
    
   loginPage.forgotPasswordMessageCheck();

})