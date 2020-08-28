function deliveryDate (anOrder, isRush) {

  let number = isRush? getRushDeliveryTime(anOrder)+1:getDeliveryTime(anOrder)+2
  return number;
}
module.exports = {
  deliveryDate,
};

function isIncludes(anOrder, value){
  return value.includes(anOrder.deliveryState);
}

function getDeliveryTime(anOrder) {
  
  if (isIncludes(anOrder,['MA','CT','NY'])) {
     return 2;
  }

  if (isIncludes(anOrder,['ME','NH'])) {
    return 3;
  }
  return 4;
}

function getRushDeliveryTime(anOrder) {
  if (isIncludes(anOrder,['MA','CT'])) {
    return 1;
  }
 if (isIncludes(anOrder,['NY','NH'])) {
    return 2;
  }
  return 3;
}

function isIncludes(anOrder, value){
  return value.includes(anOrder.deliveryState);
}
