import express from 'express'
import { migrateDB } from "../database/createDatabase.js"

const app = express()
const port = 3000

migrateDB()

app.get('/', (req, res) => {
  res.send('Hello to the Bank API for Introduction to React!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
