describe("Cadastro de um novo usuário", () => {
  it(`Usuário entra na página inicial, acessa rota de cadastro,
    insere os dados, clica para cadastrar e recebe mensagem cadastrado com sucesso`, () => {
    cy.visit("/");
    cy.get('a[href="/cadastro"]').click();
    cy.url().should("include", "/cadastro");
    cy.get("input[name=firstname]").type("Saulo");
    cy.get("input[name=surname]").type("Castro");
    cy.get("input[name=email]").type("saulocastro@exemplo.com");
    cy.get("input[name=senha]").type("1234");
    cy.get("button[type=submit]").click();
    cy.contains("Usuário Nayara cadastrado com sucesso").should("be.visible");
  });
});