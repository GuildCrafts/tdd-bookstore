const mongoose = require('mongoose')
const { Schema } = mongoose
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(mongoose)
const bookToJSON = (bookDocument) => {
  console.log(bookDocument._id);
  return {
    id: bookDocument._id,
    title: bookDocument.title,
    year: bookDocument.year,
    author: bookDocument.author,
    genres: bookDocument.genres.sort()
  }
}
const BookSchema = new Schema ({
  title: { type:String},
  author: { type:String},
  year: { type:Number},
  genres: { type:Array},
})
BookSchema.plugin(autoIncrement.plugin, 'Book')

const Book = mongoose.model('Book', BookSchema)

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

module.exports = Book, bookToJSON

//libraryPromise
// dataMatchingSchema,
// getAllBooks,
// displayBooks,
