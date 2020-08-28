function voyageRisk (voyage) {
  let result = 1;
  result += voyage.length > 4 ? 2 : 0;
  result += voyage.length > 8 ? voyage.length - 8 : 0;
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return result > 0 ? result : 0;
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result += history.length < 5 ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  result += (voyage.zone === 'china' && hasChina(history)) ? -2 : 0;
  return result > 0 ? result : 0;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }

  result += isRelateChina(voyage, history) ? caculateChinaProfit(history, voyage) : caculateNotChinaProfit(history, voyage);
  return result;
}

function isRelateChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function caculateNotChinaProfit(history, voyage) {
  let result = 0;
  result += history.length > 8 ? 1 : 0;
  result += voyage.length > 14 ? -1 : 0;
  return result;
}

function caculateChinaProfit(history, voyage) {
  let result = 0;
  result += 3;
  result += history.length > 10 ? 1 : 0;
  result += voyage.length > 12 ? 1 : 0;
  result += voyage.length > 18 ? -1 : 0;
  return result;
}

function rating (voyage, history) {
  return caculateProfitAndRisk(voyage, history);
}

module.exports = {
    voyageRisk,
    hasChina,
    captainHistoryRisk,
    voyageProfitFactor,
    rating,
};

function caculateProfitAndRisk(voyage, history) {
  const { vpf, vr, chr } = caculate(voyage, history);
  return (vpf * 3 > (vr + chr * 2)) ? 'A' : 'B';
}

function caculate(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return { vpf, vr, chr };
}

