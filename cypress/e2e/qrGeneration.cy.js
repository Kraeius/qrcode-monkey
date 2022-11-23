/// <reference types="Cypress" />

import { navigateTo } from '../../support/functions';

describe('Generate QR Code', () => {
  // Navigate to QR Generation Page
  beforeEach('Clear cookies', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    navigateTo.ap();
  });

  // Desc
  it('Create a UK Teacher Account', () => {
    cy.get('#qrcodeUrl').clear().type(`https://thebcnews.com/`);
  });
});