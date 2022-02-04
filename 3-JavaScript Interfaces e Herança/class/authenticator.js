/* Ser autenticável significa ter o método "authenticate" na classe*/

export class Authenticator {
  static login(authenticable, password){
    if(Authenticator.isAuthenticable(authenticable)){
      return authenticable.authenticate(password);
    }
    return "O método 'Authenticate' não existe.";
  }

  static isAuthenticable(authenticable){
    return "authenticate" in authenticable && authenticable.authenticate instanceof Function;
  }
}