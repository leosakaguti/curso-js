//Manipulando string e array

//Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso , transforme o array em um texto e onde eram espaços, coloque _

let texto = "Programar é legal"
let myArray = texto.split(" ") //Separa o texto em posições do array a cada espaço
console.log(myArray)
let myArrayWithUS = myArray.join("_") //Junta o array com underscores
console.log(myArrayWithUS)