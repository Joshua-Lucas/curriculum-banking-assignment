import { createAccountType } from "../src/models/accountsModel.mjs";

const account_types = ["checking", "savings"];

export function seedAccountTypes() {
  account_types.forEach((type) => {
    createAccountType(type);
  });
}
