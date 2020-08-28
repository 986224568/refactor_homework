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

test('test2 CT true', t=>{
    anOrder.deliveryState ='CT';
    let number = deliveryDate(anOrder,true);
    t.is(2,number);
});

test('test3 NY true', t=>{
    anOrder.deliveryState ='NY';
    let number = deliveryDate(anOrder,true);
    t.is(3,number);
});

test('test4 NH true', t=>{
    anOrder.deliveryState ='NH';
    let number = deliveryDate(anOrder,true);
    t.is(3,number);
});

test('test5 TT true', t=>{
    anOrder.deliveryState ='TT';
    let number = deliveryDate(anOrder,true);
    t.is(4,number);
});