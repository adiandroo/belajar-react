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
function App() {
  const [togggle, updateToggle] = useState(false);
  return (
    <>
      <div className="main">
        <Calculator />
        {/* <Routes>
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
        </Routes>
        <Counter /> */}
        {/* <button
          onClick={() => {
            updateToggle(!togggle);
          }}
        >
          Toggle
        </button>
        {togggle && <Conditional />} */}
      </div>
    </>
  );
}

export default App;
