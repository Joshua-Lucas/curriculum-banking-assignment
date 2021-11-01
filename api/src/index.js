
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello to the Bank API for Introduction to React!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
