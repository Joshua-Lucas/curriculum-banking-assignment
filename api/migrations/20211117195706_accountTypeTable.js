exports.up = function (knex) {
  return knex.schema.createTable("account_type", function (table) {
    table.increments("account_type_id").primary();
    table.string("account_type");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("account_type");
};
