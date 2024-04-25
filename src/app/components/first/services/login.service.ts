// Importing Injectable decorator from Angular core to make the class available for dependency injection.
import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root'  // Specifies that the service should be provided in the root injector.
})
export class LoginService {
  // Hard-coded credentials for the authentication.
  private readonly username: string = 'admin@gmail.com';
  private readonly password: string = 'admin';

  // Constructor for the LoginService.
  constructor() { }

  /**
   * Method to authenticate a user with a username and password.
   * @param userUsername - The username entered by the user.
   * @param userPassword - The password entered by the user.
   * @returns true if the credentials match the hard-coded values, false otherwise.
   */
  public authenticate(userUsername: string, userPassword: string): boolean {
    // Check if the provided credentials match the hard-coded username and password.
    if (userUsername === this.username && userPassword === this.password) {
      return true;  // Return true if credentials match.
    }
    return false;  // Return false if credentials do not match.
  }
}
