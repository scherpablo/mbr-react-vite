// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { inject } from "@vercel/analytics";
import { Analitycs } from "@vercel/analytics";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
      <Analitycs />
    </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
