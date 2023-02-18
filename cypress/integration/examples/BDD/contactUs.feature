Feature: Contact Us Page Validation

    Feature Description
    
    Background: Contact Us Page
       Given User on the Eva Health contact us page   

    Scenario: User fills the form with valid information
        When User enters valid name
        And  User enters valid email adress
        And  User enters comment or message 
        And  User clicks on the send button
        Then User sees that Thanks for contacting us! We will be in touch with you shortly message

    Scenario: User fills the form without name
        When User enters valid email adress
        And  User enters comment or message 
        And  User clicks on the send button
        Then User sees that this field is required error message under the name box
    
    Scenario: User fills the form without email
        When User enters valid name
        And  User enters comment or message 
        And  User clicks on the send button
        Then User sees that this field is required error message under the email box

    Scenario: User fills the form without comment or message
        When User enters valid name
        And  User enters valid email adress 
        And  User clicks on the send button
        Then User sees that this field is required error message under the comment or message box
