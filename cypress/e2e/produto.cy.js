describe('Amazon Automacao', () => {
    it('Iphone 14 - adicionar ao carrinho ', () => {
      cy.visit('https://www.amazon.com.br/')
      cy.title().should('eq','Amazon.com.br | Tudo pra você, de A a Z.');
     
      cy.get('#twotabsearchtextbox').type('iphone 14');
      cy.get('#nav-search-submit-button').click();
      cy.wait(3000);
      cy.get('[data-asin="B0BDHT79RP"]> .sg-col-inner').should('be.visible')
      .contains('Apple iPhone 14 (128 GB) – (PRODUCT) RED').click();
  
  
      // código para verificar o botão "adicionar ao carrinho".
      //foi passado um "{ multiple: true }" para identificar qual a opção correta.
      cy.get('#add-to-cart-button').click({ multiple: true })
      .should('be.visible');
      //código para clciar no botão "Não Obrigada"
      //Foi passado um "{force: true}", pois o cypresse não estava conseguindo fazer interação com o elemento.
      cy.get('#attachSiNoCoverage-announce').click({force: true})
     
  
      cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
      
  
    })
  })