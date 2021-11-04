let tableName = "account"

export function up(db){
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
        account_id INTEGER PRIMARY KEY,
        account_creation_date TEXT NOT NULL,
        account_type_id INTEGER,
        customer_id INTEGER,
        FOREIGN KEY (account_type_id) 
            REFERENCES account_type (account_type_id) 
                ON DELETE CASCADE
                ON UPDATE CASCADE
        FOREIGN KEY (customer_id) 
            REFERENCES customer (customer_id) 
                ON DELETE CASCADE 
                ON UPDATE CASCADE
    );`)

}

export function drop(db){
    return db.run(`DROP TABLE IF EXISTS ${tableName}`, function(err){
        if(err){
            console.log(err)
        }
        console.log(`${tableName} was dropped successfully.`)
    })
}
