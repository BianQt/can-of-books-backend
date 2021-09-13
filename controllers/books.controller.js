"use strict";
const Book = require("../models/books.model");

const getBooks = (req, res) => {
  Book.find((err, foundBooks) => {
    console.log(foundBooks);
    res.json(foundBooks);
  });
};


//creat an object-literal (creat Book and add its properties)
const creatBook = (req ,res) => {

  
  const { title, imgUrl, description, status, email} = req.body;


  const newBook = new Book({ title, imgUrl, description, status, email });

  newBook.save();

  res.json(newBook);
}

const deleteBook = (req, res) => {
  console.log(req.params);
  const bookIdentity = req.params.book_id;
  Book.deleteOneBook({ _id: bookIdentity }, (err, deleteBook) => {
    res.json(deleteBook);
  });
};
module.exports = {getBooks, creatBook, deleteBook};