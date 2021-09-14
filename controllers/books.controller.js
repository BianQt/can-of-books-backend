"use strict";
const Book = require("../models/books.model");

const getBooks = (req, res) => {
  Book.find((err, foundBooks) => {
    res.json(foundBooks);
  });
};

const createBook = (req, res) => {
    const { title, imgUrl, description, status, email } = req.body;

    const newBook = new Book({
        title, imgUrl, description, status, email
    });
    newBook.save();
  
    response.json(newBook);
  };

 
const deleteBook = (request, response) => {
    console.log(request.params);
    const bookId = request.params.book_id;
  
    Book.deleteOne({ _id: bookId }, (error, deletedData) => {
  
      response.json(deletedData);
    });
  
  }

module.exports = {getBooks, createBook, deleteBook};
