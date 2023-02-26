import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./components/Layout"
import Header from './components/Header';

import Home from "./pages/home";
import About from "./pages/about/history";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
