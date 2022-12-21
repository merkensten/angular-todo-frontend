# LoginComponent

This component provides a form for the user to login to the application. It has the following features:

- It displays a loading spinner while the login request is being processed.
- It displays a success message if the login request is successful.
- It displays an error message if the login request fails due to invalid credentials.

## Properties

- loading: A boolean value indicating whether the login request is being processed.
- formSucess: A boolean value indicating whether the login request was successful.
- formError: A boolean value indicating whether the login request failed due to invalid credentials.
- formErrorMessage: A string containing the error message to be displayed in case of a failed login request.

## Methods

- resetFormErrors(): This method resets the formError and formErrorMessage properties to their default values (false and 'Fel användarnamn eller lösenord' respectively).

- onLoginUser(username: string, password: string): This method is called when the user clicks the login button. It receives the username and password entered by the user as arguments. If the username and password are valid (username is not empty and password is at least 6 characters long), it calls the login() method of the authService to send a login request to the server. If the login request is successful, it navigates to the /app route. If the login request fails due to invalid credentials, it sets the formError property to true and displays an error message.

- onFormSubmit(form: NgForm): This method is called when the user submits the login form. It receives the form data as an argument. If the password is less than 6 characters long, it sets the formError property to true and displays an error message. If the password is at least 6 characters long, it calls the onLoginUser() method with the username and password entered by the user.

## Dependencies

This component has the following dependencies:

- @angular/core: This is the core Angular module, which provides the necessary infrastructure for the component to work.

- @angular/forms: This module provides the NgForm class, which is used to access the form data.

- @angular/router: This module provides the Router service, which is used to navigate to different routes in the application.

- AuthService: This is a service that provides methods for handling authentication related tasks, such as sending login requests to the server.
