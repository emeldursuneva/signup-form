///<reference types = 'cypress'/>
import { LoginPage } from '../../support/pages/LoginPage'; 

describe ('Login Page Verifications', ()=>
{
    let loginPage:LoginPage;

    beforeEach(() => {

    loginPage = new LoginPage();
    loginPage.landLoginPage();

    })
  

    it('Email verification', ()=>
    
    {loginPage.verifyEmail();})

    it('Password with 9 characters', ()=> {

        loginPage.verifyPassword();
       

    })

     it('Incorrect credentials', ()=> {

        loginPage.verifyIncorrectCredentials();
            
        
            })

    it('Forgot Password Verification', ()=> {

        loginPage.verifyForgotPassword();


            })
      
        });
