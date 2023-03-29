const URL = require('../URL')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    URL.create({
      URL: `URL-${i}`,
      shortenURL: `shortURL-${i}`
    })
  }
  console.log('done')
})