"use strict";
const Book = require("../models/books.model");

const getBooks = (req, res) => {
  Book.find((err, foundBooks) => {
    console.log(foundBooks);
    res.json(foundBooks);
  });
};

module.exports = getBooks;
