import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222831";
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - lightMode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          homepage="Home"
          aboutus="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Textform heading="Enter the text to anylize" mode={mode} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
