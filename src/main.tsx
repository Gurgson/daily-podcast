import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ladning from "./page/Landing";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ladning />}>
          
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);