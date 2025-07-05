# Prueba tecnica DGII Automatizacion Franklin Sandoval

## Descripcion
Automatización de pruebas de login para la DGII usando Cypress con Cucumber.

## Tecnologias Utilizadas
- Cypress
- Cucumber (cypress-cucumber-preprocessor)
- cucumber-html-reporter

# Estructura del Proyecto
- `cypress/e2e/features`: Archivos `.feature`
- `cypress/e2e/step_definitions`: Paso a paso de los escenarios
- `cypress/support`: Hooks y comandos personalizados
- `cypress/reports`: Reportes visuales

# Instalacion y Ejecucion
```bash
npm install
npx cypress open
```
# Ver reporte
Abrir `cypress/reports/cucumber_report.html` en el navegador para visualizar.