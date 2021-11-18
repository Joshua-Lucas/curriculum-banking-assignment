exports.up = function (knex) {
  return knex.schema.createTable("merchant", function (table) {
    table.increments("merchant_id").primary();
    table.string("merchant_name");
    table.string("merchant_phone");
    table.string("merchant_location");
    table.string("merchant_description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("merchant");
};
