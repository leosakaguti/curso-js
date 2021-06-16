//1. Declare uma variável de nome weight
    let weight = 70

//2. Que tipo de dado é a variável acima?
//undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    - name: String
    - age: Number (integer)
    - stars: Number (float)
    - isSubscribed: Boolean

*/
    let name = 'Leonardo'
    let age = 18
    let stars = 1.2
    let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?
    Object
    4.1 Atribua  a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: 'Leonardo',
    age: 18,
    weight: 70,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor,
    ou seja, somente o array vazio.
*/

let students = []