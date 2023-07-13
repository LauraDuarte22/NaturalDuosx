import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BodyComponent from "./components/Body";
import Cards from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/nosotros" Component={Cards}></Route>
          {/* // <Route path="/" Component={BannerCarousel}></Route> */}

          <Route path="/productos" Component={BodyComponent} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
