import HttpStatus from "http-status-codes";
import {
  getAllAccountsOwnedByTheCustomer,
  getAnAccountOwnedByTheCustomer,
  createAccount,
  deleteAccount,
} from "../models/accountsModel.mjs";
import { AccountErrors } from "../utils/errors.mjs";

// GETS ALL ACCOUNTS FOR THE SPECIFIED USER
export async function index(req, res) {
  const customerId = parseInt(req.body.customer_id);

  try {
    const results = await getAllAccountsOwnedByTheCustomer(customerId);
    if (results.length === 0) {
      res.status(HttpStatus.NOT_FOUND).send(AccountErrors.NO_ACCOUNTS_FOUND);
    } else {
      res.status(HttpStatus.OK).json(results);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

// GETS A SINGLE ACCOUNT FOR THE SPECIFIED USER
export async function show(req, res) {
  const customerId = parseInt(req.body.customer_id);
  const accountId = req.params.accountNumber;

  try {
    const result = await getAnAccountOwnedByTheCustomer(customerId, accountId);
    if (result.length === 0) {
      res.status(HttpStatus.NOT_FOUND).send(AccountErrors.NO_ACCOUNT_FOUND);
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

// CREATES A NEW ACCOUNT FOR THE SPECIFIED USER
export async function create(req, res) {
  const newAccount = req.body;

  try {
    const result = await createAccount(newAccount);
    res.status(HttpStatus.CREATED).json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

// DELETES A SINGLE ACCOUNT FOR THE SPECIFIED USER
export async function destroy(req, res) {
  const customerId = parseInt(req.body.customer_id);
  const accountId = req.params.accountNumber;
  try {
    const result = await deleteAccount(accountId, customerId);

    if (result === false) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .send(AccountErrors.NOT_AUTHORIZED_TO_DELETE);
    } else if (result.length === 0) {
      res.status(HttpStatus.NOT_FOUND).send(AccountErrors.NO_ACCOUNT_FOUND);
    } else {
      res.status(HttpStatus.NO_CONTENT).send("Successful Deletion");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
