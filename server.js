"uswe strict";

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


require("dotenv").config({ path: __dirname + "/.env" });
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

mongoose.connect(`${mongoUrl}${dbName}`);
const bookShelf = require("./helpers/books.shelf");
const {getBooks, creatBook, deleteBook} = require("./controllers/books.controller");


app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books", getBooks);

//To save the books just once.
app.get("/shelf", (req, res) => {
  bookShelf();
});
app.post("/books", creatBook );
 
app.delete("/books", deleteBook );

app.listen(PORT, () => {
  console.log("Server running on port 8080.");
});
