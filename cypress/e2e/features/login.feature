Feature: Escenarios de Login

  Scenario: Login con credenciales válidas
    Given el usuario navega al login
    When ingresa usuario y contraseña válidos
    And hace clic en Login
    Then debería ver el mensaje "You logged into a secure area!"
    And cierra sesión

  Scenario: Login con credenciales no válidas
    Given el usuario navega al login
    When ingresa usuario y contraseña inválidos
    And hace clic en Login
    Then debería ver el mensaje de error "Your username is invalid!"

  Scenario: Login sin ingresar usuario
    Given el usuario navega al login
    When ingresa solo la contraseña
    And hace clic en Login
    Then debería ver el mensaje de error "Your username is invalid!"
