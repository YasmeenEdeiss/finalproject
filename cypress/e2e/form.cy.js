describe('Form Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
        cy.get('nav').contains('Card Sets', { matchCase: false }).click();
        cy.contains('Add New Set', { matchCase: false }).click();
    });

    it('Submits Create Set form successfully', () => {
        cy.get('#titleInput').type('My Flashcards', { force: true });
        cy.get('[data-cy="set_form"]').submit();
        cy.contains('My Flashcards').should('exist');
    });

    it('Shows error on empty input', () => {
        cy.get('#titleInput').clear({ force: true });
        cy.get('[data-cy="set_form"]').submit();
        cy.contains('TITLE CANNOT BE EMPTY').should('exist');
    });
});
