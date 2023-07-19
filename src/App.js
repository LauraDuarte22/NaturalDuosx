import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerCarousel from "./components/Banner";
import BodyComponent from "./components/Body";
import Cards from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <section class="layout">
        <Router>
          <Header className="header" />
          <Routes>
            <Route path="/nosotros" Component={Cards} className="main"></Route>
            // <Route path="/" Component={BannerCarousel}></Route>

            <Route path="/productos" Component={BodyComponent} />
          </Routes>
          <Footer className="footer" />
        </Router>
      </section>
    </div>
  );
}

export default App;
