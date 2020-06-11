// função sem retorno
// função com console.log ao chamar a função ele imprime na tela
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)  // aqui fará a soma normalmente
imprimirSoma(2)      // Vai atribuir a = 2 e b = indefined == NAN not a number
imprimirSoma(2, 10, 11, 12, 8, 15)  // Vai imprimir 'a+b' e ignorar o restante sem reclamar 
imprimirSoma()    // NAN novamente

// Função com retorno
// função com retur, precisa chamar o console.log para saber o retorno que ela deu na tela.

function Soma(a, b = 0) {  // o valor de b será sero caso nenhum valor seja passado para ele 
    return a + b
}
console.log(Soma(2, 3))
console.log(Soma(2))   // Como o b foi tratado, ele retornará apenas o valor de 'a' 2 + 0 = 2