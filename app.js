const sum = (a,b) => {

    const fromEuroToDollar = function(valueInEuro){
        // convert the given valueInEuro to dollars
        let valueInDollar = valueInEuro * 1.2;
        //return the dollar value
        return valueInDollar;
    }
    const fromDollarToYen = function(valueInDollar){
        let valueInYen = valueInDollar *106.6;
        valueInYen=valueInYen.toFixed(1);
        valueInYen=Number(valueInYen);
        return valueInYen;
    }
    const fromYenToPound = function(valueInYen){
        let valueInPound = valueInYen *0.006;
        return valueInPound;
    }
    

    return a + b
}
console.log(sum(7,3))
module.exports = { sum };
