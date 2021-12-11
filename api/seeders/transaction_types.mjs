import { createTransactionEventType } from "../src/models/transactionsModel.mjs";
export const transactionTypes = [
  "transfer",
  "withdrawal",
  "deposit",
  "payment",
  "debit",
];

export function seedTransactionTypes() {
  transactionTypes.forEach((type) => {
    createTransactionEventType(type);
  });
}
