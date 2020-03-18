import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Header from "./components/layout/Header";
import Center from "./components/layout/Center";

const btnText = "Search";

function Greeting() {
  return (
    <section>
      <Header />
      <center>
        <button>{btnText}</button>
      </center>
      <Center />
    </section>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
