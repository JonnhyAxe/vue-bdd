# features/simple_api.feature
Feature: Simple api
  In order to retrieve messages
  As a user
  I want to make a get request

  Scenario: get message
    Given an array with length set to 0
    When I send a get message request
    Then the array length should be 2
