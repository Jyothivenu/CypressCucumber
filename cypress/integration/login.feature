Feature: Login into d3a application

    Scenario: Valid Login
        Given @login I open the "d3a" link
        And @login I enter Email "testuser@yopmail.com"
        And @login I enter Password "Password1@"
        And @login I click on login button
        Then @login I validate that user is logged in