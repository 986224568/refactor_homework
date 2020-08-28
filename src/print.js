function printOwing (invoice) {

  let result = '***********************\n**** Customer Owes ****\n***********************\n'

  let outstanding = getOutStanding(invoice);
  invoice.dueDate = getDueDate();

  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

function getOutStanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function getDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = {
  printOwing,
};