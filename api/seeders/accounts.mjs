import { createAccount } from "../src/models/accountsModel.mjs";

const accounts = [
  {
    account_type: "checking",
    customer_id: 1,
  },
  {
    account_type: "checking",
    customer_id: 2,
  },
  {
    account_type: "saving",
    customer_id: 2,
  },
];

export function seedAccounts() {
  accounts.forEach((creationData) => {
    createAccount(creationData);
  });
}
