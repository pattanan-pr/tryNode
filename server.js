const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

const books = require('./db')

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
  })

module.exports = app;