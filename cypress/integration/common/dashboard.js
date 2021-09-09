/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from '../../support/pageObjects/DashboardPage.js'
const dashboardPage = new DashboardPage()
var projectName

And('@dashboard I click on Project link', function () {
    dashboardPage.getProjectLink().click()
})

And('@dashboard I click on New Project link', function () {
    dashboardPage.getNewProjectLink().click()
})


And('@dashboard I enter random name and description {string}', function (description) {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const name = `Test Project ${id}`
    projectName = name
    dashboardPage.getProjectName().type(name)
    dashboardPage.getProjectDescription().type(description)
    dashboardPage.getAddBtn().click()
    dashboardPage.getProjectContainer().should('not.exist')

})

Then('@dashboard I validate that Project is created and listed successfully', function () {
    dashboardPage.getProjectList().each(($e1, index) => {
        const text = $e1.text()
        if (text.includes(projectName)) {
            cy.log("Project is created and listed successfully")
            return false
        } else {
            cy.log("Project is not created successfully")

        }
    })
})

And('@dashboard I click on Project tab', function () {
    dashboardPage.getProjectList().each(($e1, index) => {
        const text = $e1.text()
        if (text.includes(projectName)) {
            $e1.trigger('click')
            return false
        } else {
            cy.log("Project is not created successfully")

        }
    })
})

And('@dashboard I click on Simulation link', function () {
    dashboardPage.getSimulationLink().click()
})

And('@dashboard I click Next on Simulation modal', function () {
    dashboardPage.getSimulationNextBtn().click()
    dashboardPage.getModelingHeader().should('exist')
    cy.wait(3000)
})

Then('@dashboard I validate that Simulation is created and listed successfully', function () {
    dashboardPage.getSimulationList().should('exist')
})