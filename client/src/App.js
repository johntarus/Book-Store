import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import axios from "axios";

function App() {
  // const [title, setTitle] = useState("");

  // async function titleName(e) {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/title_name", { title });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/books/").then((response) => {
  //     setBooks(response.data);
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <div className="mx-36 sm:mx-0">
      {/* <form>
        <input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">add</button>
      </form> */}
      <Nav />
      <Main />
      <Modal />
    </div>
  );
}

export default App;
