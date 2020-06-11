var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)

// Como dentro do scopo do bloco não existe um 'numero' ele vai buscar no escopo global e retonar o valor

var numero = 1 
{
    let numero2 = 2
    console.log('dentro =', numero) 
}
console.log('fora = ', numero)