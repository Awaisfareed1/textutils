import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = (event) => {
    setText("");
  };
  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#222831" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{ background: props.mode === "dark" ? "#222831" : "white" , color: props.mode === "dark" ? "white" : "#222831"  }}
          ></textarea>
          <div className=" my-2">
            <button
              className="btn btn-sm btn-primary mx-2 mb-2"
              onClick={handleloClick}
            >
              Covert to lower
            </button>
            <button
              className="btn btn-sm btn-primary mx-2 mb-2"
              onClick={handleUpClick}
            >
              Covert to uppercase
            </button>
            <button
              className="btn btn-sm btn-primary mx-2 mb-2"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              className="btn btn-sm btn-primary mx-2 mb-2"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              className="btn btn-sm btn-primary mx-2 mb-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#222831" }}
      >
        <h3>Your text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to red this</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text: "Enter Something in the box to preview it"}</p>
      </div>
    </>
  );
}

export default Textform;
