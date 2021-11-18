// There are 300 merchants and 3 customers and 5 transaction types
import faker from "faker";
var transactions = [];

for (let i = 0; i < 100; i++) {
  let transaction = {
    transaction_event_date: faker.date.recent(53, new Date()),
    transaction_event_amount: getTransAmount(i),
    transaction_type_id: getTransType(i),
    merchant_id: getMerchantId(i),
    account_id: faker.datatype.number({ min: 1, max: 3 }),
  };
  transactions.push(transaction);
}

function getTransAmount(index) {
  switch (index % 25) {
    case 0:
      return faker.finance.amount(2100, 2459);
    case 10:
      return faker.finance.amount(100, 1500);
    default:
      return faker.finance.amount(2, 150);
  }
}

function getTransType(index) {
  switch (index % 25) {
    case 0:
      return 3;
    case 10:
      return 4;
    default:
      return faker.datatype.number({ min: 4, max: 5 });
  }
}

function getMerchantId(index) {
  switch (index % 25) {
    case 0:
      return 1;
    default:
      return faker.datatype.number({ min: 2, max: 100 });
  }
}

export function seedTransactionEvents() {
  console.log("Transactions");
  // transactions.forEach((event) => {});
}
