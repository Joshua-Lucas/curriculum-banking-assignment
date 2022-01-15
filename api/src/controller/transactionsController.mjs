import HttpStatus from "http-status-codes";
import {
  createNewTransactionEvent,
  deleteTransactionEvent,
  getAllTransactionEventsForAnAccount,
} from "../models/transactionsModel.mjs";
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

// CREATES A NEW TRANSACTION EVENT FOR THE SPECIFIED ACCOUNT
export async function create(req, res) {
  const newTransEvent = req.body;
  try {
    const result = await createNewTransactionEvent(newTransEvent);
    res.status(HttpStatus.CREATED).json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

// DELETES A NEW TRANSACTION EVENT FOR THE SPECIFIED ACCOUNT
export async function destroy(req, res) {
  const accountId = parseInt(req.body.account_id);

  const transactionId = req.params.transId;
  try {
    const result = await deleteTransactionEvent(transactionId, accountId);

    if (result === false) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .send(TransactionEventErrors.NOT_AUTHORIZED_TO_DELETE);
    } else if (result.length === 0) {
      res
        .status(HttpStatus.NOT_FOUND)
        .send(TransactionEventErrors.NO_TRANSACTIONS_FOUND);
    } else {
      res.status(HttpStatus.NO_CONTENT).send("Successful Deletion");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
