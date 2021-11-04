// Used transaction_event instead of transaction because transaction is a key word in sql
let tableName = "transaction_event"

export function up(db){
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
        transaction_event_id INTEGER PRIMARY KEY,
        transaction_event_date TEXT NOT NULL,
        transaction_event_amount REAL NOT NULL,
        transaction_event_description TEXT NOT NULL,
        transaction_event_type_id INTEGER,
        merchant_id INTEGER,
        account_id INTEGER,
        FOREIGN KEY (transaction_event_type_id) REFERENCES transaction_event_type(transaction_event_type_id) ON DELETE SET NULL ON UPDATE CASCADE,
        FOREIGN KEY (merchant_id) REFERENCES merchant(merchant_id) ON DELETE NO ACTION ON UPDATE CASCADE,
        FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE CASCADE ON UPDATE CASCADE);`)
}
export function drop(db){
    return db.run(`DROP TABLE IF EXISTS ${tableName}`, function(err){
        if(err){
            console.log(err)
        }
        console.log(`${tableName} was dropped successfully.`)
    })
}

