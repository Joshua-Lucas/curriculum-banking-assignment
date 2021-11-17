// Update with your config settings.
const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "../db/test.db3",
    },
    useNullAsDefault: true,
  },
  migrations: {
    directory: path.join(__dirname, "../Database/Migrations"), //--Changed this line
  },
};
