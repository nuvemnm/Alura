export class Conta{
    numero;
    saldo;
    cliente;
    sacar(numero, valor){
        if(this.numero == numero && valor > 0){
            if(this.saldo >= valor){
                this.saldo -= valor;
                console.log("\nSaque realizado com sucesso.");
                return valor;
            }
            else{
                console.log("\nNão foi possível realizar o saque. Valor excede o saldo em conta.");
                return 0;
            }
        }
    }

    depositar(numero, valor){
        if(this.numero == numero){
            this.saldo += valor;
            console.log("\nDeposito realizado com sucesso.");
            return valor;
        }
        else{
            console.log("\nNumero de conta incorreto"); 
            return 0;
        }
    }

    transferir(conta, numero, valor){
        const valorSacado = this.sacar(numero, valor);
        conta.depositar(conta.numero, valorSacado);    
    }
}

export class Pessoa{
    static numeroDePessoas = 0;
    nome;
    idade;
    cpf;

    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        Pessoa.numeroDePessoas++;
    }
}