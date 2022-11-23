// Navigate to App
export class NavigateTo {
    app() { 
      cy.visit('https://www.qrcode-monkey.com');
    }
  }
  
  export const navigateTo = new NavigateTo();