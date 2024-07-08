//hooks example
//custom commands

///<reference types="cypress" />
describe('verify contact us page',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify contact us page for valid data',function(){
        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // cy.get('[name="first_name"]').type('snehal')
        // cy.get('[name="last_name"]').type('kamble')
        // cy.get('[name="email"]').type('snehalkk@gmail.com')
        // cy.get('[name="message"]').type('i am learning sql')
        // cy.get('[type="submit"]').click()


        cy.contactUs('snehal','kamble','snehalkk@gmail.com','i am learning cypresqlss','[type="submit"]')
        //cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('verify contact us page for invalid email id', function () {
        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        // cy.get('[name="first_name"]').type('nikita')
        // cy.get('[name="last_name"]').type('kamble')
        // cy.get('[name="email"]').type('nikis')
        // cy.get('[name="message"]').type('byebye')
        // cy.get('[type="submit"]').click()

        cy.contactUs('nikita','kamble','nikis','byebye','[type="submit"]')
        //cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')

    })

    it('verify contact is page for incomplet data', function () {
        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('sarika')

        cy.get('[name="email"]').type('sarikakale@gmail.com')
        cy.get('[name="message"]').type('im learning cypress')
        cy.get('[type="submit"]').click()

        

        cy.contains('Error: all fields are required').should('be.visible')
    })

    it('verify contact us page for reset button', function () {

        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Actions

        // cy.get('[name="first_name"]').type('sayli')
        // cy.get('[name="last_name"]').type('jogi')
        // cy.get('[name="email"]').type('saylijogikk@gmail.com')
        // cy.get('[name="message"]').type('i am learning react')

        cy.contactUs('sayli','jogi','saylijogikk','i m larning react','[type="reset"]')
        //cy.get('[type="reset"]').click()


        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")
    })
})