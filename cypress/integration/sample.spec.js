describe('Sample Test', function () {
  it('click', function () {
    cy.viewport('iphone-6+');
    cy.visit('/index.html');
    cy.get('#main-button').click();
  });
});