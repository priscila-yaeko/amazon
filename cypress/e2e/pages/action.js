
const el = require('./elements').Element;

class Adicionar {

  acessarSite(){
    cy.visit('https://www.amazon.com.br/')
    cy.title().should('eq','Amazon.com.br | Tudo pra você, de A a Z.');

  }  

  clicarAdicionar(){

    cy.get('#add-to-cart-button').click({ multiple: true })
      .should('be.visible');
  }

  clicarFinalizar(){
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();

  }


}

export default new Adicionar();