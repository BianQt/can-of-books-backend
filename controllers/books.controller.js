"use strict";
const Book = require("../models/books.model");
const { req, res } = require('express');
const getBooks = (req, res) => {

  Book.find({email: req.params.email },(err, foundBooks) => {

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

const updateBook=(req,res )=>{

  const {title, imgUrl, description,status,email}  =req.body


  const bookIdentity = req.params.book_id;


  bookModel.findByIdAndUpdate ({_id:bookIdentity},{title,imgUrl,description,status,email},{new:true},(error,updatedBook )=> { 
    res.json(updatedBook);
  });
  };
  
module.exports = {getBooks, creatBook, deleteBook, updateBook};