import React, { useState } from "react";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";

function App() {
  const [keyword, setKeyword] = useState("");
  const searchHandler = (evt) => {
    setKeyword(evt);
  };
  return (
    <>
      <Navbar searchHandler={searchHandler} />
      <Routes>
        <Route path="/" exact element={<Home search={keyword} />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
