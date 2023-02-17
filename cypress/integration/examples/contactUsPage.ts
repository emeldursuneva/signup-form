describe('Contact Page Test Suite', function()
{
    beforeEach(() => {
        cy.visit('https://evahealth.co.uk')
        cy.get("#hs-eu-confirmation-button").click()
        cy.get('.fusion-icon').click()
        cy.get('#mobile-menu-main-menu-2 > [data-item-id="1826"] > .fusion-bar-highlight > .menu-text').click()
        cy.url().should('contain','contactus')
    })
    it('Name verification', function() {

        cy.get('#wpforms-2766-field_1').click().type('CypressAutomationTest@gmail.com')
        cy.get('#wpforms-2766-field_2').click().type('Test')
        cy.get('#wpforms-submit-2766').click()
        cy.get('label[id=wpforms-2766-field_0-error]').contains('This field is required.').should('be.visible')
    })

    it('Email verification', function() {

        cy.get('#wpforms-2766-field_0').click().type('CypressAutomationTest')
        cy.get('#wpforms-2766-field_2').click().type('Test')
        cy.get('#wpforms-submit-2766').click()
        cy.get('label[id=wpforms-2766-field_1-error]').contains('This field is required.').should('be.visible')
    })

    it('Comment or message Verification', function() {

        cy.get('#wpforms-2766-field_0').click().type('CypressAutomationTest')
        cy.get('#wpforms-2766-field_1').click().type('CypressAutomationTest@gmail.com')
        cy.get('#wpforms-submit-2766').click()
        cy.get('label[id=wpforms-2766-field_2-error]').contains('This field is required.').should('be.visible')
    })


    it('Contact Us Page Happy Path', function() {

        cy.get('#wpforms-2766-field_0').click().type('CypressAutomationTest')
        cy.get('#wpforms-2766-field_1').click().type('CypressAutomationTest@gmail.com')
        cy.get('#wpforms-2766-field_2').click().type('Test')
        cy.get('#wpforms-submit-2766').click()
        cy.get('#wpforms-confirmation-2766').contains('Thanks for contacting us! We will be in touch with you shortly.').should('be.visible')

    })

    }  )