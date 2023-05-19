
const notas = [];

notas.push(5);
notas.push(10);
notas.push(8);


let soma = 0;

for (let indice = 0; indice < notas.length ; indice++){
    const nota = notas[indice];
    soma = soma + nota;
}

const media = soma /notas.length;
console.log(media);