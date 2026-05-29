describe('Checkou - Sauce Demo', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include','/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
    })

    it('Completar checkout con datos válidos', () => {
      cy.get('[data-test="firstName"]').type('Juan');
      cy.get('[data-test="lastName"]').type('Pérez');
      cy.get('[data-test="postalCode"]').type('5000');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
      cy.get('[data-test="checkout-complete-container"]').contains('Thank you for your order!').should('be.visible');
      
    })

    it('Checkout sin completar campos obligatorios', () => {
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').contains('First Name is required').should('be.visible');

    })

});

it('Campo Last Name en Checkout con problem_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include','/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ana').should('have.value', 'Ana');
        cy.get('[data-test="lastName"]').type('Gárcia').should('have.value', 'Gárcia');
        cy.get('[data-test="continue"]').click();
});


