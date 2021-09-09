Feature: Create Simultaion

  Scenario: Create empty simultaion with valid credentials
    Given @login I open the "d3a" link
    And @login I enter Email "testuser@yopmail.com"
    And @login I enter Password "Password1@"
    And @login I click on login button
    Then @login I validate that user is logged in
    And @dashboard I click on Project link
    And @dashboard I click on New Project link
    And @dashboard I enter random name and description "Test Description"
    Then @dashboard I validate that Project is created and listed successfully
    And @dashboard I click on Project tab
    And @dashboard I click on Simulation link
    And @dashboard I click Next on Simulation modal
    And @dashboard I click on Project link
    Then @dashboard I validate that Simulation is created and listed successfully