/**
 * This account model holds the business logic for retrieving, creating, and deleting accounts.
 * The two available account types are {id: 1, "Checking"} and {id: 2, "Savings"}. These account types are set by the seeder file at seeders/account_types.mjs
 */

import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

/**
 * CRUD FUNCTIONS
 */

// --- GET ---
export async function getAllAccountsOwnedByTheCustomer(customerId) {
  return await db("account")
    .where("customer_id", "=", customerId)
    .select("*")
    .then(function (result) {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

// --- GET ---
export async function getAnAccountOwnedByTheCustomer(
  customerId,
  accountNumber
) {
  return await db("account")
    .where("customer_id", "=", customerId)
    .andWhere("account_number", "=", accountNumber)
    .select("*")
    .then((results) => results)
    .catch((err) => err);
}

// --- POST ---
export async function createAccount(creationDetails) {
  let accountNumber = generateAccountNumber();
  let accountType = getAccountType(creationDetails.account_type);

  return await db("account").insert({
    account_number: accountNumber,
    routing_number: 136090340,
    account_type_id: accountType,
    customer_id: creationDetails.customer_id,
  });
}

// --- DELETE ---
export async function deleteAccount(accountNumber, customerId) {
  // CHECKS THAT THERE IS AN ACCOUNT NUMBER THAT IS ASSOCIATE WITH THE USER SUBMITTING THE DELETE REQUEST.
  let getCount = await db("account")
    .count("*")
    .where("customer_id", "=", customerId)
    .andWhere("account_number", "=", accountNumber);

  // GETS THE COUNT. COUNT SHOULD BE 0 or 1 SINCE ACCOUNT NUMBERS ARE UNIQUE
  let userOwnsAccount = getCount[0]["count(*)"];

  //CATCHES IF THE ACCOUNT DOES NOT EXISTS FOR THE REQUESTING USER AND SUBMITS FALSE.
  if (userOwnsAccount <= 0) {
    console.log(false);
    return false;
  }

  // IF THE ACCOUNT DOES EXISTS FOR THE REQUESTING USER THEN DELETION REQUEST IS PROCESSED.
  return await db("account")
    .where("customer_id", "=", customerId)
    .andWhere("account_number", "=", accountNumber)
    .del();
}

/**
 * UTILITY FUNCTIONS FOR MODEL
 */

function generateAccountNumber() {
  let generatedAccountNumber = Math.random().toString().slice(2, 11);
  let accountNumberSearch = db("account").where(
    "account_number",
    "=",
    generatedAccountNumber
  );
  while (generatedAccountNumber === accountNumberSearch) {
    generatedAccountNumber = Math.random().toString().slice(2, 11);
    accountNumberSearch = db("account").where(
      "account_number",
      "=",
      generatedAccountNumber
    );
  }

  return generatedAccountNumber;
}

function getAccountType(accountTypeName) {
  switch (accountTypeName.toString().toLowerCase()) {
    case "checking":
      return 1;
    case "saving":
      return 2;
    default:
      break;
  }
}

export async function createAccountType(type) {
  await db("account_type").insert({
    account_type: type,
  });
}

// !!!---THIS IS ONLY USED TO SEEDING THE DB TO HAVE A ACCOUNT CREATED BEFORE TRANSACTION DATES.---!!!
export async function createSeedAccounts(creationDetails) {
  let accountNumber = generateAccountNumber();
  let accountType = getAccountType(creationDetails.account_type);

  return await db("account").insert({
    created_at: creationDetails.created_date,
    account_number: accountNumber,
    routing_number: 136090340,
    account_type_id: accountType,
    customer_id: creationDetails.customer_id,
  });
}
