import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";
import "./Components/Conditional";
import Conditional from "./Components/Conditional";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error";
import Calculator from "./Components/Calculator";
import Pokemon from "./Components/Pokemon";
function App() {
  const [toggle, updateToggle] = useState(false);
  return (
    <>
      <div className="main">
        <Pokemon />
        {/* Coba membuat kalkulator
        <Calculator /> */}
        {/* Belajar routing dengan react-router-DOM
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes> */}
        {/* Belajar state management
        <Counter /> */}
        {/* Belajar memunculkan output setelah button di klik
        <button
          onClick={() => {
            updateToggle(!toggle);
          }}
        >
          Toggle
        </button>
        {toggle && <Conditional />} */}
      </div>
    </>
  );
}

export default App;
