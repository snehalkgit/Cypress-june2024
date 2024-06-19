///<reference types = "cypress"/>

describe('verify the contact-us form functionality', function () {

    it('verify the contactus form with valid data', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type("snehal")
        cy.get('input[placeholder="Last Name"]').type("kamble")
        cy.get('input[placeholder="Email Address"]').type('snehallamble123@gmail.com')
        cy.get('textarea[class="feedback-input"]').type('im learning test automation')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!') //assertion


    })
    it('verify conatctus form with invalid data',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type("snehal")
        cy.get('input[placeholder="Last Name"]').type("kamble")
        cy.get('input[placeholder="Email Address"]').type('snehallamble1ail.com')
        cy.get('textarea[class="feedback-input"]').type('im learning sql')
        cy.get('input[value="SUBMIT"]').click()
        cy.contains('Error: Invalid email address').should('be.visible')



    })
    it('verify the contctus form with incomplete data',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type('snehal')
        cy.get('textarea[class="feedback-input"]').type('im learning sql')
        cy.get('input[value="SUBMIT"]').click()
        cy.contains('Error: all fields are required').should('be.visible')
        cy.contains('Error: Invalid email address').should('be.visible')
    })

    it.only('verify the cotactus form with reset button',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type("snehal")
        cy.get('input[placeholder="Last Name"]').type("kamble")
        cy.get('input[placeholder="Email Address"]').type('snehallamble123@gmail.com')
        cy.get('textarea[class="feedback-input"]').type('im learning test automation')
        cy.get('input[type="reset"]').click()
        //assertions
        cy.get('input[placeholder="First Name"]').should('have.text',"")
        cy.get('input[placeholder="Last Name"]').should('have.text',"")
        cy.get('input[placeholder="Email Address"]').should('have.text',"")
        cy.get('textarea[class="feedback-input"]').should('have.text',"")

    })




})