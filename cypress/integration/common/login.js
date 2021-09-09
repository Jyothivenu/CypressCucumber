/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/pageObjects/LoginPage.js'
const loginPage = new LoginPage()

Given('@login I open the {string} link', function (url) {
    if (url == 'd3a') {
        cy.visit(Cypress.env('d3aUrl'));
    } else if (url == 'project') {
        cy.visit(Cypress.env('d3aProjectUrl'))
    }
})

And('@login I enter Email {string}', function (email) {
    loginPage.getEmail().type(email)
})

And('@login I enter Password {string}', function (password) {
    loginPage.getPassword().type(password)
})

And('@login I click on login button', function () {
    loginPage.getLoginBtn().click()
})


Then('@login I validate that user is logged in', function () {
    loginPage.getHeader().should('have.text', 'Home')
})

And('@login I click on logout link', function () {
    loginPage.getSettingLink().click()
    loginPage.getLogoutLink().click()

})
