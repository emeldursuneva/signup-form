///<reference types = 'cypress'/>
import { LoginPage } from '../../support/pages/LoginPage'; 
import { BasePage } from '../../support/pages/BasePage';

describe ('Login Page Verifications', ()=>
{
    let loginPage:LoginPage;
    let basePage:BasePage;

    beforeEach(() => {

        loginPage = new LoginPage();
        basePage=new BasePage();
        loginPage.landLoginPage();

    })
  
    it('Email verification', ()=> {
        
        loginPage.invalidEmailEntry();
        loginPage.invalidEmailMessageCheck();
    
    })

    
    it('Password with 9 characters', ()=> {

        loginPage.invalidPasswordEntry();
        loginPage.invalidPasswordMessageCheck();
       
    })

     it('Incorrect credentials', ()=> {

        loginPage.incorrectCredentialsEntry();
        loginPage.incorrectCredentialsMessageCheck();
            
    })

    it('Forgot Password Verification', ()=> {

        loginPage.forgotPasswordEmailEntry();
        loginPage.forgotPasswordMessageCheck();

    })
      
        });
