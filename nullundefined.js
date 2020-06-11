let valor             // Não atribui valores a variável
console.log(valor)    // Erro Undefined, foi declado mas não foi atribuido
//console.log(valor2)   // 'is not defined', nem chegou a ser declarado

valor = null // atribui o valor de null a variável informando que não há valor nela, diferente de Undefined
console.log(valor)

const produto = {}
produto.preco = 7.50
produto.tamanho = 'm'
produto.cor = 'azul'
delete produto.preco   // Para deletar um atributo do objeto usar esse comando, ao inves de 'null'

console.log(produto)