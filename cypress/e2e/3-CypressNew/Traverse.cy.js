///<reference types="cypress" />
describe('verify DOM element using various functions', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('to get DOM element within element using .children()', function () {
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it('to get DOM element within element using .first()', function () {
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })

    it('to get DOM element within element using .last()', function () {
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')
    })

    it('to get DOM element within element using .eq(index)', function () {
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text', 'Tea')
    })
    it('to get DOM element within element using .eq(index)', function () {
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text', 'Milk')
    })

    it('to get DOM element within element using .prev()', function () {
        cy.get('#espresso').prev().should('have.text', 'Milk')
    })
    it('to get DOM element within element using .next()', function () {
        cy.get('#espresso').next().should('have.text', 'Sugar')
    })

    it('to get DOM element within element using .prevAll()', function () {
        cy.get('#milk').prevAll().should('have.length', 2)
    })

    it('to get DOM element within element using .nextAll()', function () {
        cy.get('#tea').nextAll().should('have.length', 3)
    })

    it('to get DOM element within element using .siblings()', function () {
        cy.get('#milk').siblings().should('have.length', 4)
    })

    it('to get DOM element within element using . siblings()', function () {
        cy.get('.traversal-food-list').siblings().should('have.length', 5)

    })
    it('to get DOM element within element using .parents()', function () {
        cy.get('#milk').parents().should('have.length', 6)

    })
    it('to get DOM element within element using .parentsUntill()', function () {
        cy.get('#milk').parentsUntil('.thumbnail').should('have.length', 1)
        cy.get('#milk').parentsUntil('.container').should('have.length', 3)
    })

    it('to get DOM element within element using filter()', function () {
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')

    })

    it('to get DOM element within element using.find()', function () {
        cy.get('[name="firstname"]').closest('.thumbnail').should('have.attr', 'id', 'thumbnail-1')
    })
    it('to get DOM element within element using .find()',function(){
        cy.get('#form-textfield').find('[name="firstname"]').type("snehal")
        cy.get('#form-textfield').find('[name="lastname"]').type("kamble")

    })
    it('to get DOM element within element using , closest()',function(){
        cy.get('[name="firstname"]').closest('.thumbnail').should('have.attr',"id",'thumbnail-1')
        cy.get('.navbar-toggle').closest('.navbar').should('have.attr','role','navigation')
    })
    it.only('to get DOM element within element using .closest()',function(){
        cy.get('#fruits').parent()
        cy.get('#fruits').parents().should('have.length',6)
        cy.get('#fruits').parents().should('match','body')
        cy.get('#fruits').parents().should('match','[class="container"]')
        cy.get('#fruits').parents().should('match','[class="col-sm-12"]')
    })


})