import bcrypt from "bcrypt";
import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

// Password Salting and Hashing Functions
const salt = parseInt(process.env.SALT_ROUNDS);

export const hashPassword = function (pass) {
  return bcrypt.hash(pass, salt, null);
};
export async function compareCredentials(password, hash) {
  return bcrypt
    .compare(password, hash)
    .then((result) => result)
    .catch((err) => err);
}

export async function createNewCustomer(customer) {
  const hash = await hashPassword(customer.password);
  await db("customer").insert({
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    password: hash,
  });
}

export async function getCustomer(customer) {
  return await db("customer")
    .where("email", "=", customer.email)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
}
