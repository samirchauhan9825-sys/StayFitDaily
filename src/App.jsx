import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import About from "./Pages/About";
import Exelist from "./Pages/Exelist";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Details from "./Pages/Details";
import Bodypart from "./Pages/Bodypart";
import Equipment from "./Pages/Equipment";
import Target from "./Pages/Target";
import BodypartbyTag from "./Pages/Bodypartbytag";
import Equipmentbytag from "./Pages/Equipmentbytag";
import Targetbytag from "./Pages/Targetbytag";
import SearchExe from "./Pages/SearchExe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exelist" element={<Exelist />} />
          <Route path="/searchExe" element={<SearchExe />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bodypart" element={<Bodypart />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/target" element={<Target />} />
          <Route path="/bodypartbytag/:bodypart" element={<BodypartbyTag />} />
          <Route
            path="/equipmentbytag/:equipment"
            element={<Equipmentbytag />}
          />
          <Route path="/targetbytag/:target" element={<Targetbytag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
