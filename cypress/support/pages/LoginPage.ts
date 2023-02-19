/// <reference types="cypress" />
import { BasePage } from '../../support/pages/BasePage';
let basePage:BasePage
basePage=new BasePage;

export class LoginPage{
       

public landLoginPage(){
        cy.visit(Cypress.env('baseURL'))
        cy.get("#hs-eu-confirmation-buttona").click()
       // cy.get('.fusion-icon').click()
        cy.get('#menu-item-8635').click()
        
    }

public invalidEmailEntry(){
        cy.get('[data-testid="username"]').click().type(basePage.randomFirstName()+'@g')
        cy.get('[data-testid="password"]').click().type(basePage.randompassword10())
        cy.get('[data-testid="button-login"]').click()

}

public invalidEmailMessageCheck(){
         cy.get('[data-testid="login-email-error"]').contains('Email is invalid').should('be.visible')

}

public invalidPasswordEntry(){
        cy.get('[data-testid="username"]').click().type(basePage.randomEmail())
        cy.get('[data-testid="password"]').click().type(basePage.randomPassword9())
        cy.get('[data-testid="button-login"]').click()
}

public invalidPasswordMessageCheck(){
        cy.get('.h-4 > .text-xs').contains('Password must be at least 10 characters').should('be.visible')
}

public incorrectCredentialsEntry(){
        cy.get('[data-testid="username"]').click().type(basePage.randomEmail())
        cy.get('[data-testid="password"]').click().type(basePage.randompassword10())
        cy.get('[data-testid="button-login"]').click()
}

public incorrectCredentialsMessageCheck(){
        cy.get('[data-testid="login-error"]').contains('Username or password was incorrect, please try again').should('be.visible')
}

public forgotPasswordClick(){
        cy.get('.space-y-1 > .text-sm').click()
}

public forgotPasswordURLCheck(){
        cy.url().should('contain','forgot-password')
}

public forgotPasswordEmailEntry(){        
        cy.get('input[name=username]').click().type(basePage.randomEmail())
        cy.get('button[type=submit]').click()
}

public forgotPasswordMessageCheck(){       
        cy.get('.m-4').contains('If this is the email address for a valid account,')

}

}