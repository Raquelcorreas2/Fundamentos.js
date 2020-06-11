// armazenando uma função em uma ariável ou const
const imprimirsoma = function (a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)

// armazenar uma função arrow em uma variável
const Soma = (a, b) => {
    return a + b
}

console.log(Soma(2, 3))

// retorno implícito

const Subtracao = (a, b) => a - b
console.log(Subtracao(2, 3)) 

// função de um parâmetro

const imnprimir2 = a => console.log(a)
imnprimir2('legal')