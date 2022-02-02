/* Ser autenticável significa ter o método "authenticate" */

export class Authenticator {
  static login(autenticable, password){
   return autenticable.authenticate(password);
  }
}