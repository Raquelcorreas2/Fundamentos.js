let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1              // transformar valor nunérico em verdadeiro ou falso bool
console.log(!isAtivo)     // Converte o valor numérico em falso
console.log(!!isAtivo)    // duas negações transforma ele em bool verdadeiro

console.log('os verdadeiros')

console.log(!!3)  // Aqui estou declarando que esse valor é verdadeiro sem estanciar uma variável
console.log(!!-1)  // O mesmo raciocício para esse exemplo
console.log(!! '') // verdadeiro
console.log(!! []) // array verdadeiro
console.log(!! {})  // Objeeto verdadeiro
console.log(!!Infinity) // verdadeiro 
console.log(!!(isAtivo = true)) // verdadeiro também

console.log('Os falsos')

console.log(!!0)  // o zero sempre retorna para falso
console.log(!!'')  // string vazia retorna falso
console.log(!!null)
console.log(!!NaN)
console.log(!! undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')

console.log(!!('', null, 0, 'epa' ))   // havendo apenas uma expressão verdadeira ele retornna true

let nome = ''

console.log(nome || 'desconhecido')  // caso o nome não esteja preenchido (falso), ele imprime esta mensagem 

let nome = 'Raquel'

console.log(nome || 'Desconhecido')  // Como a expressão é verdadeira, ele não irá imprimir a mensagem! 















