import { Conta} from "./class";

const conta1 = new Conta();
const conta2 = new Conta();

conta1.numero = 1001;
conta1.saldo = 100;

conta2.numero = 1010;
conta2.saldo = 20;

conta1.depositar(1111, 200);
conta1.depositar(1001, 200);
console.log(conta1);
conta2.sacar(1010, 50);
conta2.depositar(1010, 200);
console.log(conta2);
conta2.sacar(1010, 100);
console.log(conta2);

