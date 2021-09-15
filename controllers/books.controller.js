"use strict";
const Book = require("../models/books.model");

const getBooks = (req, res) => {
  const email = req.query.email;
  Book.find({ email: email }, (err, foundBooks) => {
    res.json(foundBooks);
  });
};

const createBook = (req, res) => {
  const { title, imgUrl, description, status, email } = req.body;

  const newBook = new Book({
    title,
    imgUrl,
    description,
    status,
    email,
  });
  newBook.save();

  res.json(newBook);
};

const deleteBook = (request, response) => {
  console.log(request.params);
  const bookId = request.params.book_id;

  Book.deleteOne({ _id: bookId }, (error, deletedData) => {
    response.json(deletedData);
  });
};

const updateBook = (req, res) => {
  const { title, imgUrl, description, status, email } = req.body;
  const bookId = req.params.book_id;

  Book.findByIdAndUpdate(
    { _id: bookId },
    { title, imgUrl, description, status, email },
    { new: true },
    (error, updatedBookData) => {
      res.json(updatedBookData);
    }
  );
};

module.exports = { getBooks, createBook, deleteBook, updateBook };
