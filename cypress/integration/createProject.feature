Feature: Create Project

  Scenario: Create project with valid credentials
    Given @login I open the "d3a" link
    And @login I enter Email "testuser@yopmail.com"
    And @login I enter Password "Password1@"
    And @login I click on login button
    Then @login I validate that user is logged in
    And @dashboard I click on Project link
    And @dashboard I click on New Project link
    And @dashboard I enter random name and description "Test Description"
    Then @dashboard I validate that Project is created and listed successfully
    And @login I click on logout link



  Scenario: Create project with valid credentials using link
    Given @login I open the "d3a" link
    And @login I enter Email "testuser@yopmail.com"
    And @login I enter Password "Password1@"
    And @login I click on login button
    Then @login I validate that user is logged in
    Given @login I open the "project" link
    And @dashboard I click on New Project link
    And @dashboard I enter random name and description "Test Description"
    Then @dashboard I validate that Project is created and listed successfully
    And @login I click on logout link