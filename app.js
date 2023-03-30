const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')
app.use(express.static("public"))

const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ default: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`APP is running on http://localhost:${PORT}`)
})