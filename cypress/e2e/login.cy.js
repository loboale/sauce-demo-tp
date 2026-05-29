// login.cy.js

describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login exitoso',()=>{
        // cy.log('test 1') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text', 'Swag Labs')
    })

    it('Login con contrasenia incorrecta',()=>{
        // cy.log('test 2') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauceaassd')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Username and password do not match any user in this service')
    })

    it('Login con campos vacíos',()=>{
        // cy.log('test 3')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')
        cy.contains('Login').should('be.visible');
    })

    it('Login con usuario bloqueado (locked_out_user)', () => {
        //cy.log('test 4')
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Sorry, this user has been locked out.')
        cy.contains('Login').should('be.visible');

    });

    it('Logout desde el menú hamburguesa', () => {
        //cy.log('test 5')
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[id="react-burger-menu-btn"]').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.contains('Login').should('be.visible');
    });

})