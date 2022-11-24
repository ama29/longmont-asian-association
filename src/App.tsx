import React, { useState } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { BurgerMenu } from "./components/Menu/Menu";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <div id="page-wrap">
        <BurgerMenu
          pageWrapId={"page-wrap-id"}
          outerContainerId={"outer-container-id"}
        />
        <h1>
          <img src={logo} className="logo" alt="APAL logo" />
          Asian Pacific Association of Longmont
        </h1>
      </div>
      <p>
        The Asian-Pacific Association of Longmont (A-PAL) is a 501(c)(3)
        nonprofit organization dedicated to supporting Longmont’s multicultural
        initiative by promoting diversity and bridging cultural gaps in the
        community. A-PAL not only seeks to support cultural and artistic
        projects, but also encourages active participation in city programs,
        especially in the area of education. By working to ensure that
        Longmont’s Asian community members utilize existing public programs and
        services, A-PAL seeks to develop ties within other branches of the
        community. A-PAL also provides referral assistance to those who have
        specific needs or are unfamiliar with available resources.
      </p>
      <p>
        We differ from similar organizations within Colorado in that we work in
        collaboration with a variety of groups, from individuals to governmental
        agencies. Our partners include the City of Longmont, St. Vrain Valley
        Schools, Silver Creek High School’s Leadership Academy, Front Range
        Community College, the Boulder Asian Pacific Alliance, numerous private
        businesses, local nonprofits, and individual community members. One of
        our most significant partnerships involves the Silver Creek Leadership
        Academy at Silver Creek High School, where we mentor students in
        developing leadership skills and embracing Chinese culture. Our
        commitment to promoting multiculturalism within the community engages
        people from a variety of ages and backgrounds in Longmont and beyond.
      </p>
    </div>
  );
};

export default App;
