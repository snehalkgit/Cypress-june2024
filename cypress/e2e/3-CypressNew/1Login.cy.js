///<reference types="cypress" />

describe('Verify contact us form functionality ', function () {

    it('verify the contact us form with valid data', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("snehal")
        cy.get('[name="last_name"]').type("kamble")
        cy.get('[name="email"]').type("snehalk1234@gmail.com")
        cy.get('[name="message"]').type('im learning automation testing')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.get('h1').should('contain', 'Thank You')
    })
    it('verify the cintact us form with invalid data', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("snehal")
        cy.get('[name="last_name"]').type("kamble")
        cy.get('[name="email"]').type("snehalk1234@.com")
        cy.get('[name="message"]').type('im learning automation testing')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address').should('be.visible')



    })


})
