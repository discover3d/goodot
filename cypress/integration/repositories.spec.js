// cypress/integration/repositories.spec.js

describe('Repositories Page', () => {

  beforeEach(() => {
    // Remplacez par l’URL de votre page de repositories
    cy.visit('http://localhost:3000/repositories');
  });

  it('should display a list of repositories', () => {
    // Vérifie que la liste des repositories est présente
    cy.get('.repository-list').should('be.visible');
    cy.get('.repository-item').should('have.length.greaterThan', 0);
  });

  it('should display repository details', () => {
    // Clic sur le premier repository pour voir les détails
    cy.get('.repository-item').first().click();
    cy.url().should('include', '/repositories/');
    cy.get('.repository-details').should('be.visible');
  });

  it('should contain expected fields', () => {
    // Vérification de certains champs de base pour chaque repository
    cy.get('.repository-item').first().within(() => {
      cy.get('.repository-name').should('exist');
      cy.get('.repository-description').should('exist');
      cy.get('.repository-language').should('exist');
      cy.get('.repository-stars').should('exist');
    });
  });
});
