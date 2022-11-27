import React, { useState } from "react";
// import logo from "./images/logo.jpg";
import "./App.css";
import { BurgerMenu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Layout } from "./pages/Layout";
import { Link } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <div id="page-wrap">
        <BurgerMenu
          pageWrapId={"page-wrap-id"}
          outerContainerId={"outer-container-id"}
        />
        <div className="header">
          <h1>
            {/* <img src={logo} className="logo" alt="APAL logo" /> */}
            Asian Pacific Association of Longmont
          </h1>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path='/pages/Home/Home' element={<Home/>} />
            <Route path='/pages/About/About' element={<About/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
