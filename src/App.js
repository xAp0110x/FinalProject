import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {Navbar, Homepage, Cryptocurrencies, CryptoDetails,} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Main */}
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
