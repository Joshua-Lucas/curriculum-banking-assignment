import HttpStatus from "http-status-codes";
import { getAllTransactionEventsForAnAccount } from "../models/transactionsModel.mjs";
import { TransactionEventErrors } from "../utils/errors.mjs";

// GETS ALL TRANSACTIONS FOR THE SPECIFIED ACCOUNT
export async function index(req, res) {
  const accountId = parseInt(req.body.account_id);

  try {
    const results = await getAllTransactionEventsForAnAccount(accountId);
    if (results.length === 0) {
      res
        .status(HttpStatus.NOT_FOUND)
        .send(TransactionEventErrors.NO_TRANSACTIONS_FOUND);
    } else {
      res.status(HttpStatus.OK).json(results);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
