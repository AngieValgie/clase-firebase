import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store/store.js";
import Routers from "./routes/routes.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Routers />
  </Provider>
);
