Feature: Login Page Validation


    Feature Description

    Background: Login Page
        Given User on the Eva Health login page

    Scenario: Email verification
        When User enters invalid email 
        Then User sees that Email is invalid error message

    Scenario: Password Verification
        When User enters invalid Password
        Then User sees that Password must be at least 10 characters error message 

    Scenario: Incorrect Credentials Verification
        When User enters incorrect credentials
        Then User sees that Username or password was incorrect, please try again error message

    Scenario: Forgot Password Url Verification
        When User clicks on the Forgot Password button
        Then User sees that Forgot Password page in Url

    Scenario: Forgot Password Message Verification
        When User clicks on the Forgot Password button
        And  User enters an email adress
        Then User sees that If this is the email address for a valid account, error message

