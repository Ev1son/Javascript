export class Employee{
  constructor(name, cpf, salary){
    this._name = name;
    this._cpf = cpf;
    this._salary = salary;

    this._bonus = 1;
    this._password;
  }

  authenticate(password){
    return password == this._password;
  }

  registerPassword(password){
    this._password = password;
  }
}