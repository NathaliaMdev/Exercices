
//Faça um programa para calcular o valor de gasto de combustível em uma viagem;

//Você terá 3 variáveis, sendo elas: 
//Preço do combustível;
//Valor médio do gasto do carro;
//Distância em Kilômetros da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.


import entradaDados from 'readline-sync';

let combustivel = entradaDados.question("Digite 1 para gasolina, ou 2 para etanol:");

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const km_por_litro = 10.00;
const distancia_percorrida = 100;
let precoCombustivel = "";


if (combustivel == "1"){
    console.log("Gasolina")
    precoCombustivel = precoGasolina;
    let litrosConsumidos = distancia_percorrida / km_por_litro;
    let valorGasto = precoCombustivel*litrosConsumidos;
    console.log(`O valor gasto é de ${valorGasto.toFixed(2)}`);
}else if (combustivel == "2"){
    console.log("Etanol")
    precoCombustivel = precoEtanol;
    let litrosConsumidos = distancia_percorrida / km_por_litro;
    let valorGasto = precoCombustivel*litrosConsumidos;
    console.log(`O valor gasto é de ${valorGasto.toFixed(2)}`);
}else{
    console.log("Não é possível fazer o calculo, escolha 1 ou 2.")
}



