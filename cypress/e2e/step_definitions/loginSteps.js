import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const URL = "/login";

Given("el usuario navega al login", () => {
  cy.visit(URL);
});

When("ingresa usuario y contraseña válidos", () => {
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("SuperSecretPassword!");
});

When("ingresa usuario y contraseña inválidos", () => {
  cy.get("#username").type("usuarioInvalido");
  cy.get("#password").type("claveInvalida");
});

When("ingresa solo la contraseña", () => {
  cy.get("#password").type("SuperSecretPassword!");
});

When("hace clic en Login", () => {
  cy.get("button[type='submit']").click();
});

Then('debería ver el mensaje {string}', (mensaje) => {
  cy.get("#flash").should("contain.text", mensaje);
});

Then("cierra sesión", () => {
  cy.get("a[href='/logout']").click();
});

Then("debería ver el mensaje de error {string}", (mensaje) => {
  cy.get("#flash").should("contain.text", mensaje);
});