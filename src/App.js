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
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/nosotros" element={<Cards />} />
            <Route path="/" element={<BannerCarousel />} />
            <Route path="/productos" element={<BodyComponent />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
