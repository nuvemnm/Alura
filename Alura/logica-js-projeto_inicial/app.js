
alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário

let numeroMax = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute;
let tentativa = 1;
console.log('Valor do chute:', chute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute < numeroSecreto){
            alert("O numero é maior que " + chute);
        }else{
            alert("O numero é menor " + chute);
        }
        tentativa++;

        // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto)
    }
}
console.log("Tentativas: " + tentativa);

let palavraTentativa = tentativa > 1? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);



