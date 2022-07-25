import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import "./App.css";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/books/").then((response) => {
      setBooks(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="mx-36 sm:mx-0">
      <Nav />
      <Main books={books} />
      <Modal books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
