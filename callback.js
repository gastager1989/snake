
//par
//impar
//0 wtf
const wtfParImpar = (numero, callback) => {

    if (numero === 0) return callback('error..WTF');
    else {
        if (numero % 2 === 0) return callback(undefined,'Par');
        else return callback(undefined,'Impar');
    }
}

wtfParImpar(2, (error, result) => {
    console.log('Llamada..');
    console.log(error);
    console.log(result);
    if (error) console.error(error);
    else console.log(result);
});