// cypress/integration/add_repository.spec.js

describe('Add Repository', () => {

  beforeEach(() => {
    // Remplacez par l’URL de la page d’ajout de repository
    cy.visit('http://localhost:3000/repositories/new');
  });

  it('should show the add repository form', () => {
    cy.get('#new-repository-form').should('be.visible');
  });

  it('should allow a user to add a new repository', () => {
    // Remplir le formulaire
    cy.get('#name').type('Nouveau Repository');
    cy.get('#description').type('Ceci est un test de repository');
    cy.get('#language').type('JavaScript');
    cy.get('#stars').type('10');

    // Soumettre le formulaire
    cy.get('#submit-repository').click();

    // Vérification : redirection ou présence du nouveau repository dans la liste
    cy.url().should('include', '/repositories');
    cy.contains('Nouveau Repository').should('exist');
  });

  it('should validate required fields', () => {
    // Ne pas remplir les champs obligatoires et essayer de soumettre
    cy.get('#submit-repository').click();

    // Vérifier que des messages d'erreur apparaissent
    cy.get('#name-error').should('be.visible');
    cy.get('#description-error').should('be.visible');
  });
});

// cypress/e2e/repositories.spec.js

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
