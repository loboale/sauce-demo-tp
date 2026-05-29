// inventario.cy.js

describe('Inventario - Sauce Demo', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })

    it('Verificar cantidad de productos', () => {
        //cy.inv (test 6)
        cy.get('[data-test="inventory-item-name"]').should('have.length',6)
    })

    it('Ordenar productos por precio (menor a mayor)',()=>{
        //cy.inv (test 8)
        cy.get('[data-test="product-sort-container"]').select('lohi')

        cy.get('[data-test="product-sort-container"]').should('have.value','lohi')

        cy.get('.inventory_item_name').eq(0).should('have.text','Sauce Labs Onesie')
        cy.get('.inventory_item_price').first().should('have.text','$7.99')
        
    })

})

describe('Inventario Fail - problem_user - Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    });

    it('Imágenes de productos con problem_user', () => {
        //cy.inv (test 7)
        

        //Creamos el alias del src de la primera imagen
        cy.get('[data-test="inventory-item"] img').first().invoke('attr', 'src').as('primerSrc');

        // Recuperamos el alias y lo comparamos con el src de la segunda imagen
        cy.get('[data-test="inventory-item"] img').eq(1).invoke('attr', 'src').then(function (srcSegunda) {
            expect(srcSegunda).to.not.equal(this.primerSrc);
        });
    });

    it('Ordenar productos por precio con problem_user', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('[data-test="product-sort-container"]').should('have.value','lohi')
        cy.get('.inventory_item_name').first().should('not.have.text', 'Sauce Labs Onesie');

    });


});