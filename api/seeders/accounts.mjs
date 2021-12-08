import faker from "faker";
import { createSeedAccounts } from "../src/models/accountsModel.mjs";

const accounts = [
  {
    created_date: "2021-09-08 22:40:36",
    account_type: "checking",
    customer_id: 1,
  },
  {
    created_date: "2021-11-05 22:40:36",
    account_type: "checking",
    customer_id: 2,
  },
  {
    created_date: "2021-11-28 22:40:36",
    account_type: "saving",
    customer_id: 2,
  },
];

export function seedAccounts() {
  accounts.forEach((creationData) => {
    createSeedAccounts(creationData);
  });
}
