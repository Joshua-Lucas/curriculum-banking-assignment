import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

// GET ALL TRANSACTION EVENTS FOR A SPECIFIC USER.
export async function getAllTransactionEventsForAnAccount(accountId) {
  return await db("transaction_event")
    .select(
      "transaction_event_id",
      "transaction_event_date",
      "transaction_event_amount",
      "account_id",
      "merchant_name",
      "merchant_phone",
      "merchant_city",
      "merchant_state_abbreviation",
      "merchant_description",
      "transaction_type"
    )
    .leftJoin(
      "merchant",
      "transaction_event.merchant_id",
      "merchant.merchant_id"
    )
    .leftJoin(
      "transaction_type",
      "transaction_event.transaction_type_id",
      "transaction_type.transaction_type_id"
    )
    .where("account_id", "=", accountId)
    .then((result) => {
      return result;
    })
    .catch((err) => console.error(err));
}

// GET A SINGLE TRANSACTION

//  --- POST TRANSACTION ---
export async function createNewTransactionEvent(transactionInfo) {
  await db("transaction_event").insert({
    transaction_event_date: Date.now(),
    transaction_event_amount: transactionInfo.transaction_event_amount,
    transaction_type_id: transactionInfo.transaction_type_id,
    merchant_id: transactionInfo.merchant_id,
    account_id: transactionInfo.account_id,
  });
}

// --- DELETE TRANSACTION  ---

export async function createSeedTransactionEvent(transactionInfo) {
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
