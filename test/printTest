const printTest = require('ava');
const {printOwing} = require("../src/print")

printTest('Should return result when printOwing given invoice', t => {
    const invoice = {
        "customer": "Domingo",
        "borderSpacing": [
            {amount: 10},
            {amount: 30}
        ]
    };
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 30)


    const result = printOwing(invoice);
    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: Domingo\n'+
        'amount: 40\n' +
        'amount: '+plusDay.toLocaleDateString())
});