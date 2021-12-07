exports.up = function (knex) {
  return knex.schema.createTable("transaction_event", function (table) {
    table.increments("transaction_event_id").primary();
    table.datetime("transaction_event_date");
    table.float("transaction_event_amount");
    // FOREIGN KEYS
    table
      .integer("transaction_type_id")
      .unsigned()
      .references("transaction_type_id")
      .inTable("transaction_type")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("merchant_id")
      .unsigned()
      .references("merchant_id")
      .inTable("merchant")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("account_id")
      .unsigned()
      .references("account_id")
      .inTable("account")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transaction_event");
};
