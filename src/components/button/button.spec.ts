describe('Button', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Render', () => {
    it('should be visible', () => {
      cy.get('button').should('be.visible');
    });

    it('should render content', () => {
      cy.get('button').contains(/.+/);
    });
  });

  describe('Inherits ChakraUI styles', () => {
    it('should have a `chakra-button` classs', () => {
      cy.get('button').should('have.class', 'chakra-button');
    });
  });
});
