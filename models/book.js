const mongoose = require('mongoose')
const { Schema } = mongoose
const books = require('../test/books.json')

const BookSchema = new Schema ({
  title: { type:String},
  author: { type:String},
  year: { type:Number},
  genres: { type:Array},
})

const Book= mongoose.model('Book', BookSchema)

// const dataMatchingSchema = books.map( data => {
//   return {
//     title: data.title,
//     author: data.author,
//     year: data.year,
//     genres: data.genres
//   }
// })
//
// const libraryPromise = Bookstore.create( dataMatchingSchema )

// const displayBooks = () => { return libraryPromise }
// const getAllBooks = () => { return book.find() }

// module.exports = Book

module.exports = Book

//libraryPromise
// dataMatchingSchema,
// getAllBooks,
// displayBooks,
