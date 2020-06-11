// a variável var pode ser acessada em qualquer bloco desde que não esteja dentro de uma função

{
    {
        {
            {
                var sera = 'Sera?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)


// exemplo quando é dentro de uma função

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local)