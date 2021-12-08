import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

// GET ALL TRANSACTION EVENTS FOR A SPECIFIC USER.

// GET A SINGLE TRANSACTION

// POST A TRANSACTION EVENT
// This should make both positive and negative trans actions.
// This should be able to process transfer trans actions. Show as a deposit to one account and withdraw

// DISPUTE A TRANSACTION OR DELETE A TRANSACTION.

// Calculate bank account amount on the server

export async function createNewTransactionEvent(transactionInfo) {
  await db("transaction_event").insert({
    transaction_event_date: transactionInfo.transaction_event_date,
    transaction_event_amount: transactionInfo.transaction_event_amount,
    transaction_type_id: transactionInfo.transaction_type_id,
    merchant_id: transactionInfo.merchant_id,
    account_id: transactionInfo.account_id,
  });
}

export async function createTransactionEventType(type) {
  await db("transaction_type").insert({
    transaction_type: type,
  });
}
