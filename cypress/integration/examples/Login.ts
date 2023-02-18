///<reference types = 'cypress'/>
import { LoginPage } from '../../support/pages/LoginPage'; 

describe ('Login Page Verifications', ()=>
{
    let loginPage:LoginPage;

    beforeEach(() => {

    loginPage = new LoginPage();
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
