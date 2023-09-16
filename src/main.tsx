import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Episode from "./page/Episode";
import Page404 from "./page/Page404";
import {AnimatePresence } from "framer-motion";
import About from "./page/About";
import { Routes } from "react-router-dom";
import NavigateToTopButton from "./components/NavigateToTopButton/NavigateToTopButton";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
      <Navigation/>
        <AnimatePresence>
          <Routes>
            <Route index path='/' element={<Landing />}/>
            <Route  path='/Home' element={<Landing />}/>
           
            <Route path='/About' element={<About />}/>
            <Route path='/Episode/:query' element={<Episode />}/>
            <Route path='*' element={<Page404 />}/>
          </Routes>
        </AnimatePresence>
        <Footer/>  
      </BrowserRouter>
      <NavigateToTopButton/>
  </React.StrictMode>
);