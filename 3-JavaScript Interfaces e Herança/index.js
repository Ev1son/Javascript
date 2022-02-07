import { Client } from './class/accounts/Client.js';
import { Manager } from './class/employees/Manager.js'
import { Director } from './class/employees/Director.js'
import { Authenticator } from './class/authenticator.js';

const gerente = new Manager("Evison", 10000, 12345678900);
gerente.registerPassword("1234")
const diretor = new Director("Viviane", 15000, 12345678900);
diretor.registerPassword("123456")
const cliente = new Client("Edson", 12345678911, "654");

const gerenteEstaLogado = Authenticator.login(gerente, '1234');
const diretorEstaLogado = Authenticator.login(diretor, '123456');
const clienteEstaLogado = Authenticator.login(cliente, '654');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)