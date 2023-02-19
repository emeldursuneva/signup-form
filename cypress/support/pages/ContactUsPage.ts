/// <reference types="cypress" />
import { BasePage } from '../../support/pages/BasePage';
let basePage:BasePage
basePage=new BasePage;

export class ContactUsPage{

    public landContactUsPage(){

        cy.visit(Cypress.env('baseURL'))
        cy.get("#hs-eu-confirmation-button").click()
        cy.get('.fusion-icon').click()
        cy.get('#mobile-menu-main-menu-2 > [data-item-id="1826"] > .fusion-bar-highlight > .menu-text').click()
        cy.url().should('contain','contactus')
    }

    public EnterValidName(){
        cy.get('#wpforms-2766-field_0').click().type(basePage.randomFirstName())
    }
    
    public EnterValidEmail(){  
        cy.wait(500)  
        cy.get('#wpforms-2766-field_1').click().type(basePage.randomEmail())
    }

    public EnterValidComment(){
        cy.wait(500)
        cy.get('#wpforms-2766-field_2').click().type('Test')
    }

    public sendForm(){
        cy.wait(500)
        cy.get('#wpforms-submit-2766').click()
    }

    public happyPathMessageCheck(){
        cy.get('#wpforms-confirmation-2766').contains('Thanks for contacting us! We will be in touch with you shortly.').should('be.visible')
    }

    public withoutNameErrorMessageCheck(){
        cy.get('label[id=wpforms-2766-field_0-error]').contains('This field is required.').should('be.visible')
    }

    public withoutEmailErrorMessageCheck(){
        cy.get('label[id=wpforms-2766-field_1-error]').contains('This field is required.').should('be.visible')

    }

    public withoutCommentorMessageErrorCheck(){
        cy.get('label[id=wpforms-2766-field_2-error]').contains('This field is required.').should('be.visible')
    }










}