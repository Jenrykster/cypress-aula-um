describe('Lojinha', () => {
  it('Editar Produto', () => {
    cy.visit('http://165.227.93.41/lojinha-web/');

    cy.get('#usuario').focus().type('admin');
    cy.get('#senha').focus().type('admin');
    cy.get('.btn').focus().click();

    cy.get('[rev="89002"] > .title > a').click();

    cy.get('#produtonome').should('have.value', 'BananaRelogio');
  });

  it('Editar Produto 2', () => {
    cy.visit('http://165.227.93.41/lojinha-web/');

    cy.get('#usuario').focus().type('admin');
    cy.get('#senha').focus().type('admin');
    cy.get('.btn').focus().click();

    cy.get('[rev="89002"] > .title > a').click();

    cy.get('#produtonome').should('have.value', 'BananaRelogio');
  });
});
