import React from "react";
import "../../stylesheets/About/Partners.css";
import AllState from "../../images/partners/Allstate.jpg";
import BAPA from "../../images/partners/bapa.png";
import CFBC from "../../images/partners/CFBC.png";
import ChinaBuffet from "../../images/partners/ChinaBuffet.jpg";
import ChinaGourmet from "../../images/partners/ChinaGourmet.jpg";
import EastMoon from "../../images/partners/EastMoon.jpg";
import IBM from "../../images/partners/IBM.jpg";
import Khos from "../../images/partners/Khos.jpg";
import LCF from "../../images/partners/LCF.png";
import MAC from "../../images/partners/mac.jpg";
import MissingChunk from "../../images/partners/MissingChunk.jpg";
import PolnerWealthManagement from "../../images/partners/PolnerWealthManagement.jpg";
import POM from "../../images/partners/POM.jpg";
import RoyalWok from "../../images/partners/RoyalWok.png";
import Sakura from "../../images/partners/Sakura.jpg";
import SCHS from "../../images/partners/SCHS.jpg";
import SCLA from "../../images/partners/scla.jpg";
import SVVSD from "../../images/partners/svvsd.png";
import ThaiShi from "../../images/partners/thaishi.jpg";
import UnitedChinese from "../../images/partners/UnitedChinese.png";

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
            <a href="https://www.silvercreekleadership.academy/">
              <img src={MAC} className="partner-image" alt="MAC" />
            </a>
          </div>
          {/* <img src={BAPA} className="partner-image" alt="BAPA" /> */}
        </div>
      </div>
      <div className="sponsors-section">
        <div className="sponsors-section-title">
          Sponsors
        </div>
        <div className="sponsors-images">
          <div className="sponsor-image-section">
            <img src={IBM} className="sponsor-image" alt="IBM" />
            <img src={CFBC} className="sponsor-image" alt="CFBC" />
          </div>
          <div className="sponsor-image-section">
            <img src={SCHS} className="sponsor-image" alt="SCHS" />
            <img src={POM} className="sponsor-image" alt="POM" />
          </div>
          <div className="sponsor-image-section">
            <img src={LCF} className="sponsor-image" alt="Longmont Community Foundation" />
            <img src={PolnerWealthManagement} className="sponsor-image" alt="Polner Wealth Management Group" />
          </div>
          <div className="sponsor-image-section">
            <img src={AllState} className="sponsor-image" alt="Allstate Insurance" />
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
            <img src={Sakura} className="contributor-image" alt="Sakura" />
            <img src={Khos} className="contributor-image" alt="Khos" />
            <img src={ChinaGourmet} className="contributor-image" alt="China Gourmet" />
            <img src={RoyalWok} className="contributor-image" alt="Royal Wok" />
          </div>
          <div className="contributor-image-section">
            <img src={ThaiShi} className="contributor-image" alt="Thai Shi" />
            <img src={UnitedChinese} className="contributor-image" alt="United Chinese" />
            <img src={MissingChunk} className="contributor-image" alt="Missing Chunk" />
            <img src={EastMoon} className="contributor-image" alt="East Moon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
