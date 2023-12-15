import React from "react";
import ReactDOM from "react-dom/client";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import "./Assets/Styles/index.css";
import App from "./Components/App";
import reducer from "./reducers/index";
import { Provider } from "react-redux";

// Store
const store = configureStore({
  reducer,
  middleware: () => new Tuple(/*logger,*/ thunk),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// Middleware
// const logger = (store) => (next) => (action) => {
//   if (typeof action !== "function") {
//     console.log("ACTION_TYPE = ", action.type, store);
//   }
//   next(action);
// };
