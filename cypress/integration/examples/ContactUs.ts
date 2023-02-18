///<reference types = 'cypress'/>
import { ContactUsPage } from '../../support/pages/ContactUsPage'; 

describe ('Contact Us Page Verifications', ()=>
{
    let contactUsPage:ContactUsPage;

    beforeEach(() => {

        contactUsPage = new ContactUsPage();
        contactUsPage.landContactUsPage();

    })

    it('Contact Us Page Happy Path', function() {

        contactUsPage.EnterValidName()
        contactUsPage.EnterValidEmail()
        contactUsPage.EnterValidComment()
        contactUsPage.sendForm()
        contactUsPage.happyPathMessageCheck()

    })

    it('Without Name Error Message Verification', function() {

        contactUsPage.EnterValidEmail()
        contactUsPage.EnterValidComment()
        contactUsPage.sendForm()
        contactUsPage.withoutNameErrorMessageCheck()      
    })

    it('Without Email Error Message Verification', function() {

        contactUsPage.EnterValidName()
        contactUsPage.EnterValidComment()
        contactUsPage.sendForm()
        contactUsPage.withoutEmailErrorMessageCheck()
        
    })

    it('Without Comment or Message Error Verification', function() {

        contactUsPage.EnterValidName()
        contactUsPage.EnterValidEmail()
        contactUsPage.sendForm()
        contactUsPage.withoutCommentorMessageErrorCheck()

        
    })


    

    }  )