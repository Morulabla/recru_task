describe('Rental duration', () => {
    it('should open website', () => {
      cy.visit("https://www.qarson.fr/voitures/renault/clio-v/zen/11681/");
    });
    
    it('should change financing option', () => {
        cy.get('.financement-tile').eq(1).click({force: true})
    })

    it('should change monthly period', () => {
        cy.get('.financement-tile').eq(1).within(() => {
            cy.get('[data-testid=current-months]')
                .should('be.visible')
                .contains(48)
                
            cy.get('[data-testid=change-month-decrement-button]')
                .should('be.visible')
                .click({force: true})
 
            cy.get('[data-testid=current-months]')
                .should('be.visible')
                .contains(36)
        })
        cy.reload()
    })

    it('should change monthly price', () => {
        cy.get('.financement-tile').eq(1).within(() => {
            cy.get('.financing-option-price>span').contains('159 €')
            cy.get('[data-testid=change-month-decrement-button]').click({force: true})
            cy.get('.financing-option-price>span').contains('169 €')
        })
    })
})