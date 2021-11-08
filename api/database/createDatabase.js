import sqlite3 from 'sqlite3'
import path from 'path'
import fs from 'fs'
import { migrateUp } from './migrations/migrate.js';

var sqlite = sqlite3.verbose()

// Creates directory to hold database if one does not exists yet.
if(fs.existsSync(`${path.resolve('../db')}`) !== true){
  fs.mkdirSync("../db")
}

// Creates a Database connection
var db = new sqlite.Database(`${path.resolve('../db/data.db')}`, function(err){
    if(err){
        console.log(err)
    }
    console.log("Connected to bank db")
});


// Migrates the Database tables and then seeds from the custom data and model factories.
export function migrateDB(){db.serialize(function() {
  migrateUp(db)

   db.run("INSERT INTO customer(first_name, last_name, email) VALUES (?, ?, ?)", ["john", "smith","jsmith@smith.net"], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with customer ${this.lastId}`);})
//   var stmt = db.prepare("INSERT INTO customer VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }


  db.each("SELECT * FROM customer", function(err, row) {
      console.log(row.customer_id + ": " + row.first_name);
  });

});

db.close();
}
