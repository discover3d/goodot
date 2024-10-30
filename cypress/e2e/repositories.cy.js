// cypress/e2e/pages/repositories.spec.js

describe('Tests sur la page des repositories', () => {
  beforeEach(() => {
    // Visitez la page des repositories avant chaque test
    cy.visit('/repositories'); // Remplacez par l'URL de votre page des repositories
  });

  it('devrait afficher la liste des repositories', () => {
    // Vérifiez que la liste des repositories est visible
    cy.get('.repository-list') // Remplacez par le sélecteur approprié
      .should('be.visible')
      .and('have.length.greaterThan', 0); // Vérifiez qu'il y a au moins un repository
  });

  it('devrait afficher les détails d\'un repository', () => {
    // Cliquez sur un repository pour voir ses détails
    cy.get('.repository-item').first().click(); // Remplacez par le sélecteur approprié

    // Vérifiez que les détails du repository sont affichés
    cy.get('.repository-details') // Remplacez par le sélecteur approprié
      .should('be.visible')
      .and('contain', 'Nom du repository'); // Remplacez par le nom du repository attendu
  });
});

describe('Tests sur l\'insertion des repositories', () => {
  beforeEach(() => {
    // Visitez la page d'insertion des repositories avant chaque test
    cy.visit('/repositories/new'); // Remplacez par l'URL de votre page d'insertion
  });

  it('devrait insérer un nouveau repository', () => {
    // Remplissez le formulaire d'insertion
    cy.get('input[name="name"]').type('Nouveau Repository'); // Remplacez par le sélecteur approprié
    cy.get('textarea[name="description"]').type('Description du nouveau repository'); // Remplacez par le sélecteur approprié
    cy.get('input[name="owner.login"]').type('NomDeL\'Owner'); // Remplacez par le sélecteur approprié
    cy.get('input[name="owner.id"]').type('123456'); // Remplacez par le sélecteur approprié

    // Soumettez le formulaire
    cy.get('button[type="submit"]').click(); // Remplacez par le sélecteur approprié

    // Vérifiez que le nouveau repository est affiché dans la liste
    cy.get('.repository-list') // Remplacez par le sélecteur approprié
      .should('contain', 'Nouveau Repository'); // Vérifiez que le nom du nouveau repository est présent
  });
});
