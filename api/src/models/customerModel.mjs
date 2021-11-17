import bcrypt from "bcrypt";
import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

// Password Salting and Hashing Functions
const salt = parseInt(process.env.SALT_ROUNDS);

export const hashPassword = function (pass) {
  return bcrypt.hash(pass, salt, null);
};
export function compareCredentials(password, hash) {
  return bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      return err;
    }
    return result;
  });
}

export async function createNewCustomer(customer) {
  console.log(customer);
  const hash = await hashPassword(customer.password);
  await db("customer").insert({
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    password: hash,
  });
}
