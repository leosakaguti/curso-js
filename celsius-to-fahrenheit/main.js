/* Celsius to Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

    let celsius = '38.5'
    let fahrenheit = ''
    temperatureConversor(celsius, fahrenheit)
    
function temperatureConversor(c, f) {
    if((f == '' || f == '0' || f == null) && (c == '' || c == '0' || c == null)){
        console.log('Os dois valores estão vazios')
    }
    else if(f == '' || f == '0' || f == null){
        const f = (c * 9/5) + 32
        console.log(`A temperatura de ${c} celsius é de ${f} fahrenheit`)
    }else if(c == '' || c == '0' || c == null){
        const c = (f - 32) * 5/9
        console.log(`A temperatura de ${f} fahrenheit é de ${c} celsius`)
    }
}
