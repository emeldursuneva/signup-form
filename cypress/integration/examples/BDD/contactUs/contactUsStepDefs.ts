import{ Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import { ContactUsPage } from "../../../../support/pages/ContactUsPage"
let contactUsPage = new ContactUsPage()


Given('User on the Eva Health contact us page', () => {
    
    contactUsPage.landContactUsPage()
})

When('User enters valid name', () => {

    contactUsPage.EnterValidName()
})

When('User enters valid email adress', () => {

    contactUsPage.EnterValidEmail()
})

When('User enters comment or message', () => {

    contactUsPage.EnterValidComment()
})

When('User clicks on the send button', () => {

    contactUsPage.sendForm()
})

Then('User sees that Thanks for contacting us! We will be in touch with you shortly message', () => {

    contactUsPage.happyPathMessageCheck()
})

Then('User sees that this field is required error message under the name box', () => {
   
    contactUsPage.withoutNameErrorMessageCheck()
})

Then('User sees that this field is required error message under the email box', () => {
    
    contactUsPage.withoutEmailErrorMessageCheck()

})

Then('User sees that this field is required error message under the comment or message box', () => {
    
    contactUsPage.withoutCommentorMessageErrorCheck()
})

