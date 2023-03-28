const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const URL = req.body.URL
  console.log(req.body)
  res.render('success', { URL })
})

router.get('/:shortURL', (req, res) => {
  res.redirect('http://www.googl.com')
})
module.exports = router