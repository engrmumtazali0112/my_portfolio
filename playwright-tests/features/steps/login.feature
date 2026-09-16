Feature: Login to SauceDemo
  As a user
  I want to log in to the application
  So that I can access the inventory

  Background:
    Given I open the SauceDemo login page

  @smoke @bdd
  Scenario: Successful login with valid credentials
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the inventory page
    And I should see 6 products

  @regression @bdd
  Scenario: Failed login with locked user
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message
    And the error should contain "locked out"

  @regression @bdd
  Scenario Outline: Login with multiple users
    When I login with username "<username>" and password "<password>"
    Then I should see "<result>"

    Examples:
      | username               | password     | result     |
      | standard_user          | secret_sauce | inventory  |
      | problem_user           | secret_sauce | inventory  |
      | performance_glitch_user| secret_sauce | inventory  |