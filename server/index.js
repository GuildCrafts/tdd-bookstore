const mongoose = require('mongoose')
const express = require('express')
const server = express()
const http = require('http')
const Book = require('../models/book.js')
const errorResponse = require( './errorResponse')
const BOOKS = require('../test/books.json')
// const jquery = require('jquery')
// const $ = require('jquery')(require("jsdom").jsdom().parentWindow)

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

server.get('/api/books/', (request, response, next) => {

    if(request.query.author){
      toTitleCase = (str) => {
        return str.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
      const something = toTitleCase(request.query.author)
      // let re = new RegEx(something, "g")
      let re = new RegExp(something, 'i')
      console.log("authorPerson: ", something);

      Book.find().where('author').regex(re).limit(3).exec()
        .then( books => { const result = books.filter( book => {
          return book.title})
          response.status(200).json(result)})
        .catch( error => next(error))
    }else{
      Book.find().limit(10).exec()
        .then( books => response.status(200).json(books))
          // if(books.length == 10) =>
          // return response.status(201)
        .catch( error => next(error))
    }
})

server.post('/api/test/reset-db', (request, response, next) => {
  // mongoimport --db test --collection books --type json --file books.json --jsonArray
  response.send('db reset')
})

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}

module.exports = server
