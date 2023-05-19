/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    para realizar este percurso.
*/


class Carros {

    constructor(nome, quilometro){
        this.nome = nome;
        this.quilometro = quilometro;
    }
    tipos = [
        {nome: 'honda', cor:'Amarelo', gasto: 5.0},
        {nome: 'chevrolet', cor: 'Cinza', gasto: 3.5},
        {nome: 'fiat', cor: 'Rosa', gasto: 4.0}
    ]



    calcularGasto(nome,quilometro){
        let nomeDigitado = nome.toLowerCase()
        for( let dado of this.tipos){
            if (nomeDigitado == dado.nome){
                let gastoCarro = dado.gasto;
                let gastoFinal = quilometro * gastoCarro * preco_combustivel;
                console.log(`O gasto do carro ${nome} de cor ${dado.cor} é o gasto médio é de ${gastoFinal}`)

            }
        }
     }
     calcularGasto2(nome){
        let nomeDigitado = nome.toLowerCase()
        for( let indice in this.tipos){
            let lista = this.tipos[indice]
            if (lista.nome == nomeDigitado){
                console.log(`Este nome está no índice ${indice}, e o nome é ${nome}`);
            }
        }
}

}

const honda = new Carros();
honda.calcularGasto('Honda', 1000);

const chevrolet = new Carros();
chevrolet.calcularGasto2('Chevrolet');