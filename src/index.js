import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/layout/Header";
import Center from "./components/layout/Center";

const btnText = "Search";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

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
