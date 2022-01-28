import auth0Config from "../../cypress.env.json";

describe('login', () => {
  describe('login and call an external api', () => {
    it('should get token without signing in and access restricted route',  () => {
      cy
        .visit("/")
        .createSimulation(auth0Config)
        .get('[data-testid=logout]').should('not.exist')
        .given()
        .login()
        .visit("/")
        .get('[data-testid=logout]').should('exist')
        .logout();
    });
  })
});