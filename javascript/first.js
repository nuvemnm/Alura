console.log("execute");
let idade = 25;
idade ++;
console.log(idade);

const lista = ["coisa","carro","pessoa","casa","moto"];

const segundaLista = new Array("coisa","carro","pessoa","casa","moto", "força");

console.log(lista[2], lista[4]);
console.log(segundaLista[2], segundaLista[4]);

lista.push("força");

//lista.slice(1,1);

console.log(lista.splice(2,2));
console.log(lista);
