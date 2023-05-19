

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoPercurso(distancia,precoCombustivel){
        return this.gastoMedioPorKm * distancia * precoCombustivel;
    }


}

const uno = new Carro('Fiat','Prata',1/12);
console.log(`Este carro é um ${uno.marca} de cor ${uno.cor} e que gasta ${uno.gastoMedioPorKm}`)
let total = uno.calcularGastoPercurso(10000,6.60);
console.log(total.toFixed(3));
