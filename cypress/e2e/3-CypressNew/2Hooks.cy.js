///<reference types = "cypress"/>

//before -- beforeEach -- afterEach -- After(afterall)


before(function(){
    cy.log('i will execute first')
})

beforeEach(function(){
    cy.log('i will execute before each test case')
})

it('test case 1',function(){
    cy.log('test case 1')
})

it('test case 2',function(){
    cy.log('test case 2')
})

afterEach(function(){
    cy.log('i will execute after each test case')
})

after(function(){
    cy.log('i execute after all test case ')
})