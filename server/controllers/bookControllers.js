const Store = require("../models/Books.models");

//getting all the books
const getAllBooks = async (req, res) => {
  try {
    const bookstore = await Store.find();
    res.json(bookstore);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//getting one book
const getSingleBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Store.findById(id);
    res.json(book);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//creating books
const createBook = async (req, res) => {
  let book = new Store({
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    publishDate: req.body.publishDate,
  });
  try {
    checkBook = await Store.findOne({ title: book.title }).exec();
    if (checkBook)
      throw new Error(`Book with title ${book.title} already exists`);
    else book = await book.save();
    res.json(book);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//updating book
const updateBook = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const options = { new: true };
  try {
    const book = await Store.findByIdAndUpdate(id, updateData, options);
    res.send(book);
  } catch (err) {
    console.error(err);
  }
};

//deleting book
const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Store.findByIdAndDelete(id);
    res.json(book);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
