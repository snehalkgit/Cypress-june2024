///<reference types='cypress' />

describe('verify radio button and check box',function(){
    //radio button 

    it('verify radio button - webdriver-uni',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.to.checked')
        cy.get('[id="radio-buttons"]').find('[value="orange"]').check().should('be.checked')
        cy.get('[value="purple"]').should('not.be.checked')


    })
    it.only('verify radio button letkodeit',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').should('not.be.checked')
        cy.get('#bmwradio').click().should('be.checked')
       // cy.get('#bmwradio').uncheck().should('not.be.checked')  // it will not work
       cy.get('#benzradio').click().should('be.checked')
       cy.get('#bmwradio').should('not.be.checked')

    })

    //checkbox
    it('verify check box-webdriver-uni',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')

    })
    it('verify raiodbutton/check box - Amazon',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-line-2"]').first().click()
        cy.get('[class="hi_IN"]').click({force:true})
        cy.get('[value="mr_IN"]').click({force:true})

    })
})
