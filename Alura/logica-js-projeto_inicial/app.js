alert('Boas vindas ao site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro!Preencha todos os campos";
alert(mensagemDeErro);


let var1 = prompt("Informe seu nome:");
nome = var1;
let var2 = prompt("Informe sua idade:");
idade = var2;

if(idade >= 18){
    alert("Pode tirar habilitação");
}else{
    alert("Não pode tirar habilitção");
}