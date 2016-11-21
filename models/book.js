const mongoose = require('mongoose')
const { Schema } = mongoose
const books = require('../test/books.json')

const { $,jQuery, getJSON } = require('jquery')


const BookSchema = new Schema ({
  title: { type:String},
  author: { type:String},
  year: { type:String},
  genres: { type:String},
})


const Bookstore = mongoose.model('Bookstore', BookSchema)

const data = JSON.parse(books)
$.getJSON(data, (json) => {
  $.each(data.title)
  console.log(json); // this will show the info it in firebug console
})

const dataMatchingSchema = books.map( data => {
  return {
    title: data.title,
    author: data.author,
    year: data.year,
    genres: data.genres
  }
})

const libraryPromise = Bookstore.create( dataMatchingSchema )

// const displayBooks = () => { return libraryPromise }
// const getAllBooks = () => { return book.find() }

// module.exports = Book

module.exports = {
  libraryPromise
}

// dataMatchingSchema,
// getAllBooks,
// displayBooks,
