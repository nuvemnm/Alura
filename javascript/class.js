export class Conta{
    numero;
    saldo;
    sacar(numero, valor){
        if(this.numero == numero && valor > 0){
            if(this.saldo >= valor){
                this.saldo -= valor;
                console.log("\nSaque realizado com sucesso.");
            }
            else{
                console.log("\nNão foi possível realizar o saque. Valor excede o saldo em conta.");
            }
        }
    }

    depositar(numero, valor){
        if(this.numero == numero){
            this.saldo += valor;
            console.log("\nDeposito realizado com sucesso.");
        }
        else{
            console.log("\nNumero de conta incorreto"); 
        }
    }
}