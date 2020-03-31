import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Header from "./components/layout/Header";
import Center from "./components/layout/Center";
import App from "./App";

const btnText = "Search";

function Greeting() {
  return (
    <section>
      <App />
    </section>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
/*
      <Header />
      <center>
        <button>{btnText}</button>
      </center>
      <Center />
      */
