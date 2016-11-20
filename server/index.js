const express = require('express')
const server = express()
const http = require('http')
const Book = require('../models/book.js')
const errorResponse = require( './errorResponse')

var debug = require('debug')('src:server')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// const connection = 'mongodb://127.0.0.1:27017/test'
const connection = 'mongodb://localhost/test'

server.on('error', onError)
// server.on('listening', onListening)

const port = ( process.env.PORT || '3000')
server.set('port', port)

mongoose.connect(connection)
  .then(() => console.log('connection successful'))
  .catch((error) => console.error(error))
  // .then(() => server.listen(port))
  // .catch( error => next(error))

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
        break
      default:
        throw error
    }
  }


// server.set('port', process.env.PORT || '3000')

server.get('/ping', (request, response, next) => {
  response.send('pong')
})
server.post('/api/books', (request, response, next) => {
  var message = 'title cannot be blank'
  Book.create(request.body)
    // .then(book =>  response.json(book))
    .then(book => {
      if(request.body.title) {
        return response.status(201).json(book)
      }else {
        return response.status(400).response.send('title cannot be blank')
      }})
    .catch( errorResponse( response ))
    .catch( error => next(error))

})

server.post('/api/test/reset-db', (request, response, next) => {
  response.send('db reset')
})

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}

module.exports = server
