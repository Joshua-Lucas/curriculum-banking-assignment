exports.up = function (knex) {
  return knex.schema.createTable("account", function (table) {
    table.increments("account_id").primary();
    table.timestamp("created_at", { useTz: true });
    table.integer("account_number");
    table.integer("routing_number").defaultTo(136090340);

    //   FOREIGN KEYS
    table
      .integer("account_type_id")
      .unsigned()
      .references("account_type_id")
      .inTable("account_type")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("customer_id INTEGER")
      .unsigned()
      .references("customer_id")
      .inTable("customer")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("account");
};
