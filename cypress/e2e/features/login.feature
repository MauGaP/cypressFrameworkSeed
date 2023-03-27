Feature: Login

    As a control Union User
    I want to successfully log in
    in order to use the application

    Scenario: successfull login attempt
        Given the user is on login page
        When the user logs into the application
        Then the dashboard is displayed in the application
