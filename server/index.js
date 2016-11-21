const mongoose = require('mongoose')
const express = require('express')
const server = express()
const http = require('http')
const Book = require('../models/book.js')
const errorResponse = require( './errorResponse')

const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }));

var debug = require('debug')('src:server')

// const {libraryPromise} = require('../models/book.js')

mongoose.Promise = global.Promise
const connection = 'mongodb://localhost:27017/test'

const port = ( process.env.PORT || '3000')
server.set('port', port)

mongoose.connect(connection)
  .then(() => console.log('connection successful'))
  .catch((error) => console.error(error))

server.get('/ping', (request, response, next) => {
  response.send('pong')
})

server.post('/api/books', (request, response, next) => {
  Book.create(request.body)
    .then(book => {
      if(request.body.title) {
        book.genres.sort()
        return response.status(201).json(book)
      }else {
        response.body = {error:{message: "title cannot be blank"}}
        return response.status(400).json(response.body)
      }})
    .catch( error => next(error))
})

server.get('api/books', (request, response, next) => {
  
})
server.post('/api/test/reset-db', (request, response, next) => {
  // mongoimport --db test --collection <books> --type json --file ../test/books.json --jsonArray
  response.send('db reset')
})

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}

module.exports = server
