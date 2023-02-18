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

        contactUsPage.happyPathContactUsPage();

    })

    it('Name verification', function() {

        contactUsPage.verifyName();
       
    })

    it('Email verification', function() {

        contactUsPage.verifyContactUsEmail();
        
    })

    it('Comment or message Verification', function() {

        contactUsPage.verifyCommentorMessage();

        
    })


    

    }  )