export class LoginPage{

    public landLoginPage(){
        cy.visit('https://evahealth.co.uk')
        cy.get("#hs-eu-confirmation-button").click()
        cy.get('.fusion-icon').click()
        cy.get('#mobile-menu-main-menu-2 > [data-item-id="8635"] > .fusion-bar-highlight > .menu-text').click()
        
    }

public verifyEmail(){
        cy.get('[data-testid="username"]').click().type('emeldursun.uk@g')
        cy.get('[data-testid="password"]').click().type('1234567890')
        cy.get('[data-testid="button-login"]').click()
        cy.get('[data-testid="login-email-error"]').contains('Email is invalid').should('be.visible')
    
}

public verifyPassword(){
    cy.get('[data-testid="username"]').click().type('emeldursun.uk@gmail.com')
    cy.get('[data-testid="password"]').click().type('123456789')
    cy.get('[data-testid="button-login"]').click()
    cy.get('.h-4 > .text-xs').contains('Password must be at least 10 characters').should('be.visible')
}

public verifyIncorrectCredentials(){
    cy.get('[data-testid="username"]').click().type('emeldursun.uk@gmail.com')
            cy.get('[data-testid="password"]').click().type('1234567890')
            cy.get('[data-testid="button-login"]').click()
            cy.get('[data-testid="login-error"]').contains('Username or password was incorrect, please try again').should('be.visible')
}

public verifyForgotPassword(){

    cy.get('.space-y-1 > .text-sm').click()
        cy.url().should('contain','forgot-password')
        cy.get('input[name=username]').click().type('emeldursun.uk@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.get('.m-4').contains('If this is the email address for a valid account,')

}

}