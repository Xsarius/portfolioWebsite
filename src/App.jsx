import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Section from "./components/Section/Section";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NotFound404 from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="App-body">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Section component={<Home />} />
                  <Section component={<About />} />
                  <Section component={<Skills />} />
                  <Section component={<Projects />} />
                  <Section component={<Contact />} />
                </React.Fragment>
              }
            />
            <Route path="*" element={<Section component={<NotFound404 />} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
