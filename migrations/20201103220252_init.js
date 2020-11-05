// record changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("car_specs", (tbl) => {
    // a primary key, called 'id', unsigned, integer, autoincrementing
    tbl.increments();
    tbl.integer("vin", 500).notNullable().unique().index();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.decimal("mileage", 9, 2).notNullable();
    tbl.string("transmission");
    tbl.string("titleStatus");
    /*
    tbl.string('name', 512).notNullable().unique().index();
    tbl.decimal('price', 8, 2);
    //Relational Databases store booleans ad 1 (for true) and 0 for (false)
    tbl.boolean('available').defaultTo(false);
    */
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car_specs");
};

//required: notNullable
//unique: no copies
//index: index nuber given to each one
//float?:
//??
