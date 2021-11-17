exports.up = function (knex) {
  return knex.schema.createTable("customer", function (table) {
    table.increments("customer_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email").unique();
    table.string("password");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customer");
};
