var tableName = "transaction_type"

export function up(db){
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
        transaction_type_id INTEGER PRIMARY KEY,
        transaction_type TEXT NOT NULL
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
