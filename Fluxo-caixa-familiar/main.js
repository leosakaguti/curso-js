/* Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá caluclar o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let familia = {
    receitas: [2000.22, 550.51, 380],
    despesas: [180, 580.05, 3000.35]
}

function sum(array) {
    let total = 0
    for(let value of array){
        total += value;
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(familia.receitas)
    const calculateExpenses = sum(familia.despesas)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "negativo"

    if(total >= 0){
        balanceText = 'positivo'
    }
    console.log(`O seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()