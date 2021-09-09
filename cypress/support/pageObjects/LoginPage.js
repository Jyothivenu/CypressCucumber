class LoginPage {
    getEmail() {
        return cy.get('[id="email"]')
    }

    getPassword() {
        return cy.get('[id="password"]')
    }

    getLoginBtn() {
        return cy.get('[class*="button "]')
    }

    getHeader() {
        return cy.get('[class*="header__page-title"]', { timeout: 5000 })
    }
    getSettingLink() {
        return cy.get('.side-nav__account-controls__button', { timeout: 5000 })
    }
    getLogoutLink() {
        return cy.contains('Logout', { timeout: 5000 })
    }
}

export default LoginPage;