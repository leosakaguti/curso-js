//throw

function sayMyName(name = '') {
    if (name === ''){
        throw new Error('Nome vazio')
    }
}

//try catch

try{
    sayMyName()
}catch(e){
    console.log(e)
}