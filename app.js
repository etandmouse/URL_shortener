const express = require('express')
const app = express()
const routes = require('./routes')

const PORT = 3000

app.use(routes)

app.listen(PORT, () => {
  console.log(`APP is running on http://localhost:${PORT}`)
})