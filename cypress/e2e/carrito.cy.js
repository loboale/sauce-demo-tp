//carrito.cy.js

describe('Carrito - Sauce Demo', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include','/inventory.html');
    });

    it('Agregar un producto al carrito', () => {
      //cy.carrito (test 10)
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').contains('Remove').should('be.visible');
      cy.get('[data-test="shopping-cart-badge"]').contains('1').should('be.visible');
    });

    it('Agregar múltiples productos y verificar contador', () => {
      //cy.carrito (test 11)
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      cy.get('[data-test="shopping-cart-badge"]').contains('3').should('be.visible');
    });

    it('Eliminar un producto desde la página del carrito', () => {
      //cy.carrito (test 12)
      cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
      cy.get('[data-test="shopping-cart-badge"]').contains('1').should('be.visible');

    });

});
