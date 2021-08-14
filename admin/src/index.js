import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
// import "./animate.css";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App className="overflow-x-hidden" />
  </Provider>,
  document.getElementById("root")
);
