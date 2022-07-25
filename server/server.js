const express = require("express");
var app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const booksRoutes = require("./routes/booksRoutes");
const dotenv = require("dotenv").config();
const cors = require("cors");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const url = process.env.DB_URI;
//connecting to database
mongoose
  .connect(url)
  .then((result) => console.log("connected succefully to db"))
  .catch((err) => console.log("error connecting to db: " + err.message));

app.listen(port, () => {
  console.log("listening on port " + port);
});

//books routes
app.use("/books", booksRoutes);
