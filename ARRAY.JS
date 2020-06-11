const valores = [7.7, 8.9 , 6.3, 9.2]
console.log(valores[0],  valores[3])    // ele vai imprimir o indexador 0 e 3
console.log(valores[4])                // esse índice não existe e dara uma mensage 'undefined'

valores[4] = 10       // Atribui ao indextador 4 no array, o valor 10

console.log(valores)   // agora o array passa a ter o valor 10
console.log(valores.length)  // Indica quantos elementos tem o array

valores.push({id: 3}, false, null, 'teste')  // Adiciona valores ao array
console.log(valores)

console.log(valores.pop()) // remove o último valor do array 
delete valores[0]   // Ele vai remover o valor do índice indicado

console.log(typeof valores)  // tipo de valor do array
