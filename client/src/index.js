import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { PersistGate } from "redux-persist/integration/react";
import redux from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={redux.store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={redux.persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
