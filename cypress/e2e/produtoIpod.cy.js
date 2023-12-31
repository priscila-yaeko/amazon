/// <reference types="cypress" />

//import Adicionar from '.pages/action';

describe("Amazon Automacao", () => {
  it("Iphone 14 - adicionar ao carrinho ", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.title().should("eq", "Amazon.com.br | Tudo pra você, de A a Z.");
    cy.wait(2000);

    cy.get("#twotabsearchtextbox").type("ipod apple");
    cy.get("#nav-search-submit-button").click();
    cy.wait(3000);
    cy.get('[data-asin="B07RK58K76"]')
      .should("be.visible")
      .contains("AirPods com estojo de recarga (2a geração)")
      .click();

    // código para verificar o botão "adicionar ao carrinho".
    //foi passado um "{ multiple: true }" para identificar qual a opção correta.
    cy.get("#add-to-cart-button")
      .click({ multiple: true })
      .should("be.visible");
    //código para clciar no botão "Não Obrigada"
    //Foi passado um "{force: true}", pois o cypresse não estava conseguindo fazer interação com o elemento.

    cy.get("#sw-gtc > .a-button-inner > .a-button-text").click();
    //cy.get('#attachSiNoCoverage-announce').click({force: true})

    cy.get(
      "#sc-buy-box-ptc-button > .a-button-inner > .a-button-input"
    ).click();
  });
});
