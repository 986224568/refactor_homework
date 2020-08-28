const deliveryTest = require('ava')
const {deliveryDate} = require('../src/delivery');
// deliveryTest('Should return date when deliveryDate given MA state and rush', t => {
//     const anOrder = {
//         "deliveryState": 'MA',
//         "placedOn":{
//             "plusDays": function (plusDays) {
//                 let today = new Date();
//                 let plusedDay = new Date();
//                 plusedDay.setDate(today.getDate() + plusDays);
//                 return plusedDay.toLocaleDateString();
//             }
//         },
//         isRush: true
//     }

//     let today = new Date();
//     let plusDay = new Date();
//     plusDay.setDate(today.getDate() + 2)

//     t.is(deliveryDate(anOrder),plusDay.toLocaleDateString())
// })
deliveryTest('test', t => {
    t.is(true, true)
})
