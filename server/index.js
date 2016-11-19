const express = require('express')
const mongoose = require('mongoose')
// const bookData = require('./test/books.json')
const server = express()

server.set('port', process.env.PORT || '3000')

mongoose.Promise = global.Promise

mongoose.createConnection(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URI ||
  'mongodb://127.0.0.1:27017/hamHarm' )



server.get('/ping', (request, response, next) => {
  response.send('pong')
})

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}

module.exports = server
