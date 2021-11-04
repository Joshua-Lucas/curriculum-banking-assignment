import * as customerTable from "./customerTable.js"
import * as accountTypeTable from "./accountTypeTable.js"
import * as accountTable from "./accountTable.js"
import * as merchantTable from "./merchantTable.js"
import * as transactionTypeTable from "./transactionTypeTable.js"
import * as transactionTable from "./transactionTable.js"

export function migrateUp(db){
    customerTable.up(db)
    accountTypeTable.up(db)
    accountTable.up(db)
    merchantTable.up(db)
    transactionTypeTable.up(db)
    transactionTable.up(db)
}

export function migrateDrop(db){
    customerTable.drop(db)
    accountTypeTable.drop(db)
    accountTable.drop(db)
    merchantTable.drop(db)
    transactionTypeTable.drop(db)
    transactionTable.drop(db)
}
