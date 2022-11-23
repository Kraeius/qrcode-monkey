/// <reference types="Cypress" />

//import { navigateTo } from '../../support/functions';

describe("Generate QR Code", () => {
  // Navigate to QR Generation Page
  beforeEach("Clear cookies", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://www.qrcode-monkey.com");
  });

  // Generates a green-whiteish whatsapp QR Code
  it("Generate a Basic QR Code", () => {
    // Type URL
    cy.get("#qrcodeUrl").clear().type("https://whatsapp.com/");
    // Set Colors
    cy.get(".title").contains("Set Colors").click();
    cy.get('color-picker[ng-model="qrcode.config.bodyColor"')
      .click()
      .clear()
      .type("#26D10F");
    cy.get("label").contains("Foreground Color").click();
    cy.get('color-picker[ng-model="qrcode.config.bgColor"')
      .click()
      .clear()
      .type("#FDFDFD");
    cy.get("label").contains("Background Color").click();
    // Add Logo
    cy.get(".title").contains("Add Logo Image").click();
    cy.get('i[class="sprite-logo sprite-logo-whatsapp-circle"').click();
    // Customize Design
    cy.get(".title").contains("Customize Design").click();
    cy.get('i[class="sprite sprite-body sprite-dot"').click();
    cy.get('i[class="sprite sprite-frame4"').click();
    cy.get('i[class="sprite sprite-ball5"').click();
    // Change Size - Needs Work
    cy.get('.rz-pointer-min')
      .trigger("mousedown")
      .trigger("mousemove", { clientX: 0.01, clientY: 0 })
      .trigger("mouseup");
    // Generate QR
    cy.get("#button-create-qr-code").click(); 
    // Assertions
    cy.get('img[src*="//api.qrcode-monkey.com/"'); // API Returned a Preview Image
    cy.get('#button-create-qr-code').should('be.disabled'); // Generate QR Code button is disabled
    // Download QR Code PNG and Verify the File - Needs Work (path definition etc.)

    /*cy.get('#button-download-qr-code-png').click();
    const downloadsFolder = Cypress.config('downloadsFolder')
    const downloadedFilename = path.join(downloadsFolder, 'qr-code.png') 
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
    .should(buffer => expect(buffer.length).to.be.gt(100));*/
  });
});
