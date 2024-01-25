//console.log(" Hello  I am Santosh")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
    res.send('Login to instagram')
  })
  app.get('/twitter', (req, res) => {
    res.send('Login to twitter')
  })
  app.get('/facebook', (req, res) => {
    res.send('Hello World now Login to Facebook')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})