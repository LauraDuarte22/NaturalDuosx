import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerCarousel from "./components/Banner";
import ImageContainer from "./components/ImageContainer";
import Cards from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/nosotros" Component={Cards}></Route>
<<<<<<< HEAD
          <Route path="/" Component={BannerCarousel}></Route>
=======
          {/* <Route path="/" Component={BannerCarousel}></Route> */}
>>>>>>> origin/main
          <Route path="/productos" Component={ImageContainer} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
