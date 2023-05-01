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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

//GitHub pages doesn't support the tech used by the BrowserRouter
//HashRouter and RouterProvider are required
// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   // <BrowserRouter basename="/currency-exchange">
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
//   // </BrowserRouter>
//   // </React.StrictMode>
// );

//in packagejson:  "homepage": "https://idilkel.github.io/currency-exchange",
//in packagejson:
// "scripts": {
//   "start": "react-scripts start",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },
