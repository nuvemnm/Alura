import {Conta} from "./class.js";
import {Pessoa} from "./class.js";

const conta1 = new Conta();
const conta2 = new Conta();

const  cliente1 = new Pessoa("Matheus Gregor", 21, "141.960.306-02");
const  cliente2 = new Pessoa("Gabriela Anjos", 24, "156.120.376-98");

conta1.numero = 1001;
conta1.saldo = 100;

conta2.numero = 1010;
conta2.saldo = 20;

/*
conta1.depositar(1111, 200);
conta1.depositar(1001, 200);
console.log(conta1);
conta2.sacar(1010, 50);
conta2.depositar(1010, 200);
console.log(conta2);
conta2.sacar(1010, 100);
console.log(conta2);
*/
conta1.cliente = cliente1;
conta2.cliente = cliente2;

//conta1.transferir(conta2, 1001, 80);
//conta2.transferir(conta1, 1010, 45);

console.log(cliente1);
console.log(Pessoa.numeroDePessoas);
//console.log(conta2);

