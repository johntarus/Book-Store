const express = require("express");
const cors = require("cors");
const router = express.Router();
const bookControllers = require("../controllers/bookControllers");

//routes
//getting all books
router.get("/", bookControllers.getAllBooks);
//getting one book
router.get("/:id", bookControllers.getSingleBook);
//creating books
router.post("/", cors(), bookControllers.createBook);
//updating books
router.patch("/:id", bookControllers.updateBook);
//deleting books
router.delete("/:id", bookControllers.deleteBook);

module.exports = router;
