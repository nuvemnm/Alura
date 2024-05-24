
alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute;
let tentativa = 1;
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
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

if(tentativa > 1){
    alert("Você descobriu com " + tentativa + " tentativas");
}else{
    alert("Você descobriu com " + tentativa + " tentativa");
}
