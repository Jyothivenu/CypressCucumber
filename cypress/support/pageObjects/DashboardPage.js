class DashboardPage {

    getProjectLink() {
        return cy.get('.side-nav__main__wrapper > div:nth-child(2) > div', { timeout: 5000 })
    }

    getNewProjectLink() {
        return cy.get('.button--accent', { timeout: 5000 })
    }


    getProjectName() {
        return cy.get('#input-field-name', { timeout: 5000 })
    }

    getProjectDescription() {
        return cy.get('#textarea-field-nameTextArea', { timeout: 5000 })
    }
    getAddBtn() {
        return cy.get('.library-name-modal__container button', { timeout: 5000 })
    }
    getProjectList() {
        return cy.get('.saved-project__headline__name > span', { timeout: 5000 })
    }

    getProjectContainer() {
        return cy.get('.library-name-modal__container', { timeout: 5000 })
    }

    getSimulationLink() {
        return cy.get('.saved-project__button--new-simulation', { timeout: 5000 })
    }

    getSimulationNextBtn() {
        return cy.get('.settings-form__submit', { timeout: 5000 })
    }

    getSimulationList() {
        return cy.get('.saved-config__list', { timeout: 5000 })
    }

    getModelingHeader() {
        return cy.get('.header > .headline', { timeout: 5000 })
    }
}

export default DashboardPage;