describe('envelope: Routes component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=routes--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Routes!');
    });
});
