var tableName = "customer"

export function up(db){
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
        customer_id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
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