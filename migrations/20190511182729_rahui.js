
exports.up = function(knex, Promise) {
  return knex.schema.createTable("rahui", table => {
    table.increments("id").primary();
    table.string("user_id");
    table.string("region");
    table.string("iwi");
    table.string("hapu");
    table.string("authoriser");
    table.string("description", 1000);
    table.string("korero", 1000);
    table.string("geo_ref");
    table.integer("date_placed");
    table.integer("date_lifted");
    table.string("contact")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rahui");
};