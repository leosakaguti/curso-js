//function expression

//parâmetros (parameters)
const sum = function(x, y){
    //não declarar a variável sem let, var ou const
    let total = x+y
    return total
}

let x = 2.3
let y = 3
console.log(`A soma é ${sum(x,y)}`) //2 e 3 são argumentos
