describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    });

    it('Navigates to Card Sets page and sees the Add Set button', () => {
        cy.get('nav').contains('Card Sets', { matchCase: false }).click();
        cy.contains('Add New Set', { matchCase: false }).should('exist');
    });

    it('Navigates to About page', () => {
        cy.get('nav').contains('About', { matchCase: false }).click();
        cy.contains('About Study Night', { matchCase: false }).should('exist');
    });

    it('Navigates to Home page', () => {
        cy.get('nav').contains('Home', { matchCase: false }).click();
        cy.contains('A Digital Study Solution', { matchCase: false }).should('exist');
    });
});

