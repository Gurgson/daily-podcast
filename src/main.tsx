import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Landing />}>
            
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

  </React.StrictMode>
);