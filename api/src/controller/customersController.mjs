import HttpStatus from "http-status-codes";
import { getCustomer, compareCredentials } from "../models/customersModel.mjs";
import { CustomerErrors } from "../utils/errors.mjs";

// GETS CUSTOMER INFO FOR AUTHENTICATED USER
export async function index(req, res) {
  const customerCredentials = req.body;

  try {
    const customer = await getCustomer(customerCredentials);

    // CHECKS THAT A CUSTOMER WITH THAT EMAIL EXISTS.
    if (customer.length === 0) {
      res.status(HttpStatus.UNAUTHORIZED).send(CustomerErrors.NO_ACCOUNT);
      return;
    }

    // UNSALTS AND UNHASHS CUSTOMER"S PASSWORD AND COMPARES THEM.
    const hashPassword = customer[0].password;
    const checkAuth = await compareCredentials(
      customerCredentials.password,
      hashPassword
    );

    // IF PASSWORDS DO NOT MATCH RETURNS AN UNAUTHORIZED AND INVALID PASSWORD MESSAGE TO CLIENT.
    if (checkAuth !== true) {
      res.status(HttpStatus.UNAUTHORIZED).send(CustomerErrors.INVALID_PASSWORD);
      return;
    }

    // RETURNS CUSTOMER INFORMATION IF PASSWORD WATCHES THE ONE IN THE DATABASE.
    const customerData = {
      customer_id: customer[0].customer_id,
      first_name: customer[0].first_name,
      last_name: customer[0].last_name,
      email: customer[0].email,
    };
    res.status(HttpStatus.OK).json(customerData);
  } catch (err) {
    console.log(err);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
