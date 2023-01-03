import React, { useState } from "react";
import "./App.css";
import { BurgerMenu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about/history';
import { Programs } from './pages/programs';
import { Events } from './pages/events';
import { Involvement } from './pages/involvement';
import { Contact } from './pages/contact';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const logo = require('./images/logo.jpg');
  return (
    <div className="App">
      <div id="page-wrap">
        <BurgerMenu
          pageWrapId={"page-wrap-id"}
          outerContainerId={"outer-container-id"}
        />
        <div className="header">
          <h1>
            <img src={logo} className="logo" alt="APAL logo" />
            Asian Pacific Association of Longmont
          </h1>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='/pages/home' element={<Home />} />
              <Route path='/pages/about/history' element={<About />} />
              <Route path='/pages/programs' element={<Programs />} />
              <Route path='/pages/events' element={<Events />} />
              <Route path='/pages/involvement' element={<Involvement />} />
              <Route path='/pages/contact' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
