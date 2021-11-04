var tableName = "merchant"

export function up(db){
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
        merchant_id INTEGER PRIMARY KEY,
        merchant_name TEXT NOT NULL,
        merchant_phone TEXT NOT NULL,
        merchant_location TEXT NOT NULL,
        merchant_description TEXT NOT NULL
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