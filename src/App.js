import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import Mint from "./pages/Mint";
import Game from "./pages/Game";
import NoPage from "./components/common/NoPage";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import UserContext from "./components/common/UserContext";

import "./App.css";

function App() {
  const [isMintPage, setIsMintPage] = useState(false);
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <UserContext.Provider
        value={{
          isMintPage: isMintPage,
          setIsMintPage: setIsMintPage,
          connected: connected,
          setConnected: setConnected,
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
