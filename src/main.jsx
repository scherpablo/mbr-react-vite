// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { inject } from "@vercel/analytics";
import { Analitycs } from "@vercel/analytics/react";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analitycs />
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
