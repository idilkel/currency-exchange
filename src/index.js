import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter,
  HashRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

//GitHub pages doesn't support the tech used by the BrowserRouter
//HashRouter and RouterProvider are required
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <BrowserRouter basename="/currency-exchange">
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </BrowserRouter>

  // </React.StrictMode>
);
