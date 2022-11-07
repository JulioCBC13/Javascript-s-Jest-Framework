

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

 
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a YEN
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}



const fromYenToPound = function(valueInYen){
    // convertimos el valor a YEN
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return valueInPound;
}








module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound }

