class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e meu ano de nascimento é ${this.anoDeNascimento}`);
    }
};

const victor = new Pessoa("Vitor", 25);
const renan = new Pessoa ("Renan",30);

victor.descrever();
renan.descrever();
