exports.up = function (knex) {
  return knex.schema.createTable("transaction_type", function (table) {
    table.increments("transaction_type_id").primary();
    table.string("transaction_type");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transaction_type");
};
