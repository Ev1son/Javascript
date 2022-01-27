export class Employee{
  constructor(name, cpf, salary){
    this._name = name;
    this._cpf = cpf;
    this._salary = salary;

    this._bonus = 1;
    this._senha;
  }

  registerPassword(senha){
    this._senha = senha;
  }
}