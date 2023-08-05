import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./components/Layout"

import Home from "./pages/home";
import Initiatives from "./pages/about/Initiatives";
import BoardOfDirectors from "./pages/about/BoardOfDirectors";
import Awards from "./pages/about/Awards";
import Partners from "./pages/about/Partners";
import CommunityService from "./pages/programs/CommunityService";
import CulturalOutreach from "./pages/programs/CulturalOutreach";
import ResourceReferrals from "./pages/programs/ResourceReferrals";
import ChineseNewYear from "./pages/events/ChineseNewYear";
import InclusiveCommunities from "./pages/events/InclusiveCommunities";
import LongmontTreeLighting from "./pages/events/LongmontTreeLighting";
import PastEvents from "./pages/events/PastEvents";
import Involvement from "./pages/involvement";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="board-of-directors" element={<BoardOfDirectors />} />
          <Route path="awards-and-recognitions" element={<Awards />} />
          <Route path="partners-and-sponsors" element={<Partners />} />
          <Route path="cultural-outreach" element={<CulturalOutreach />} />
          <Route path="resource-referrals" element={<ResourceReferrals />} />
          <Route path="community-service" element={<CommunityService />} />
          <Route path="lunar-new-year" element={<ChineseNewYear />} />
          <Route path="inclusive-communities" element={<InclusiveCommunities />} />
          <Route path="longmont-tree-lighting" element={<LongmontTreeLighting />} />
          <Route path="past-events" element={<PastEvents />} />
          <Route path="involvement" element={<Involvement />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
