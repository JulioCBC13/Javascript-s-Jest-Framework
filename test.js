
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("4.2 dollar should be 537.18", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    // le agregue esos "000" por que si no, el test me daba error, la calculadora lo redondea pero java no
    expect(fromDollarToYen(4.2)).toBe(537.1800000000001); //4.2 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (4.2 * 127.9)
})

test("537.1800000000001 Yens should be 429.74400000000008", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(537.1800000000001)).toBe(429.74400000000008); //4.2 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (4.2 * 127.9)
})
