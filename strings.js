const escola ='Cod3r'

console.log(escola.charAt(4)) // Fatiamento da string selecionando a letra 'r'
console.log(escola.charCodeAt(3))  // encontra esse valor na tabela asp
console.log(escola.indexOf('3'))   // encontrar um dígito dentro da minha string 
console.log(escola.substring(1))  // exibir string a partir do indice 1 em diante
console.log(escola.substring(1, 3))  // exibir string do indice 1 ao 3

console.log('escola'.concat(escola).concat('!')) // Aqui ele concatenou a palavra escola, com a variável escola e esclamação
console.log(escola.replace(3, 'e')) // Aqui eu removi o '3' e substitui por 'e'
console.log('João,Maria,Aline'.split(',')) // Esse comando gera um array

console.log('Escola' + escola + '!') // Outra maneira de concatenação