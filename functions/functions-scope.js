//FUNCTION SCOPE
let subject = 'teste'

function createThink(subject){ //SE A FUNÇÃO ESTIVER SEM PARÂMETRO, IRÁ SOBRESCEVER SE A VARIÁVEL FOR IGUAL A ALGUMA VARIÁVEL EXTERNA
    subject = 'aaaa'
    return subject
}

console.log(subject)
console.log(createThink(subject))