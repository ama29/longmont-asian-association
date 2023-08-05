import React from "react";
import "../../stylesheets/About/Partners.css";
import CFBC from "../../images/partners/CFBC.png";
import ChinaBuffet from "../../images/partners/ChinaBuffet.jpg";
import EastMoon from "../../images/partners/EastMoon.jpg";
import IBM from "../../images/partners/IBM.jpg";
import MAC from "../../images/partners/mac.jpg";
import SCHS from "../../images/partners/SCHS.jpg";
import SCLA from "../../images/partners/scla.jpg";
import SVVSD from "../../images/partners/svvsd.png";
import Bohua from "../../images/partners/BohuaChineseSchool.jpg";
import CityOfLongmont from "../../images/partners/CityOfLongmont.png";
import Kiwanis from "../../images/partners/Kiwanis.png";
import Seagate from "../../images/partners/Seagate.jpg";
import SVVSDIC from "../../images/partners/SVVSDIC.png";
import Zometool from "../../images/partners/Zometool.jpg";
import Eldorado from "../../images/partners/EldoradoNaturalSpringWater.jpg";

const Partners = () => {
  return (
    <div>
      <div className="partners-section">
        <div className="partners-section-title">
          Partners
        </div>
        <div className="partners-images">
          <div className="partner-image-section">
            <a href="https://www.svvsd.org/">
              <img src={SVVSD} className="partner-image" alt="SVVSD" />
            </a>
          </div>
          <div className="partner-image-section">
            <a href="https://www.silvercreekleadership.academy/">
              <img src={SCLA} className="partner-image" alt="SCLA" /></a>
          </div>
          <div className="partner-image-section">
            <a href="https://newsite.bohua.org/home">
              <img src={Bohua} className="partner-image" alt="Bohua" />
            </a>
          </div>
        </div>
      </div>
      <div className="sponsors-section">
        <div className="sponsors-section-title">
          Sponsors
        </div>
        <div className="sponsors-images">
          <div className="sponsor-image-section">
            <img src={MAC} className="sponsor-image" alt="MAC" />
            <img src={SCHS} className="sponsor-image" alt="SCHS" />
          </div>
          <div className="sponsor-image-section">
            <img src={IBM} className="sponsor-image" alt="IBM" />
            <img src={CFBC} className="sponsor-image" alt="CFBC" />
          </div>
          <div className="sponsor-image-section">
            <img src={Seagate} className="sponsor-image" alt="Seagate" />
            <img src={Kiwanis} className="sponsor-image" alt="Kiwanis" />
          </div>
          <div className="sponsor-image-section">
            <img src={SVVSDIC} className="sponsor-image" alt="Innovation Center" />
            <img src={CityOfLongmont} className="sponsor-image" alt="CityOfLongmont" />
          </div>
          <div className="sponsor-image-section">
            <img src={Zometool} className="sponsor-image" alt="Zometool" />

          </div>
        </div>
      </div>
      <div className="contributor-section">
        <div className="contributor-section-title">
          Contributors
        </div>
        <div className="contributor-images">
          <div className="contributor-image-section">
            <img src={ChinaBuffet} className="contributor-image" alt="China Buffet" />
            <img src={EastMoon} className="contributor-image" alt="East Moon" />
            <img src={Eldorado} className="contributor-image" alt="EldoradoWater" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
