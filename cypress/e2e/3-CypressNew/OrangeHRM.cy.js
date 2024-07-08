///<reference types="cypress" />
describe('verify login page for OHRM webpage ',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('verify login for valid data',function(){
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('admin123')

        // cy.get('[type="submit"]').click()

        cy.OHRMLogin('Admin','admin123')

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")
    })
    it('verify login for invalid data',function(){
        // cy.get('[name="username"]').type('Admin145')
        // cy.get('[name="password"]').type('admin345')

        // cy.get('[type="submit"]').click()

        cy.OHRMLogin('admin2','admin123')

        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})