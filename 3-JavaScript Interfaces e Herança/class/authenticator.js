export class Authenticator {
  static login(employee, password){
   return employee.password == password;
  }
}