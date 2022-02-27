import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles/Global.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <div className={styles.website_container}>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById("root")
);
