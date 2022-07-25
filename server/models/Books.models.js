const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    publishDate: { type: Date, required: true, default: Date.now() },
    // image: { contentType: "String", data: "Buffer", required: true },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", bookSchema);
module.exports = Store;
