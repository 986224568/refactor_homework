const test = require('ava');
const {deliveryDate} = require('../src/delivery')

const anOrder ={
    'deliveryState':'',
    placedOn: {}
};
anOrder.placedOn.plusDays = function (number) {
    return number;
};

test('test1 MA true', t=>{
    anOrder.deliveryState ='MA';
    let number = deliveryDate(anOrder,true);
    t.is(2,number);
});

