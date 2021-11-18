import { exec } from "child_process";
import { seedAccountTypes } from "./account_types.mjs";
import { seedAccounts } from "./accounts.mjs";
import { seedCustomers } from "./customers.mjs";
import { seedMerchants } from "./merchants.mjs";
import { seedTransactionTypes } from "./transaction_types.mjs";
import { seedTransactionEvents } from "./transactions.mjs";

// Runs all the seed files to create data and run insert queries
function seedDatabase() {
  seedCustomers();
  seedAccountTypes();
  seedAccounts();

  seedMerchants();
  seedTransactionTypes();
  seedTransactionEvents();
}

// Runs the migrate:latest command then reseeds all the data into the database.
export function migrateUpAndSeed() {
  exec("npx knex migrate:latest", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    seedDatabase();
  });
}

// Drops all the tables and then migrates up all the tables and finally reseeds the DB
export function resetSeededData() {
  exec("npx knex migrate:rollback --all", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    migrateUpAndSeed();
  });
}
