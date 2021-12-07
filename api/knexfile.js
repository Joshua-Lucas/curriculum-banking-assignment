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

};
