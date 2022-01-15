// There are 300 merchants and 3 customers and 5 transaction types
import faker from "faker";
import { createSeedTransactionEvent } from "../src/models/transactionsModel.mjs";

var transactions = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j < 100; j++) {
    let transaction = {
      transaction_event_date: faker.date.recent(53, new Date()),
      transaction_event_amount: getTransAmount(j),
      transaction_type_id: getTransType(j),
      merchant_id: getMerchantId(j),
      account_id: i,
    };
    transactions.push(transaction);
  }
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
  transactions.forEach((event) => {
    createSeedTransactionEvent(event);
  });
}
