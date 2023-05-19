import React from "react";
import "../stylesheets/Involvement.css";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: require("../images/outreach/APAL-volunteers-1.jpg") },
  { url: require("../images/outreach/CultrualOutreachYouthAlternative.jpg") },
  { url: require("../images/outreach/CulturalOutreachMentorship.jpg") },
  { url: require("../images/outreach/A-PAL-Volunteers-2.jpg") },
  { url: require("../images/outreach/APAL-volunteers-3.jpg") }
]

const Involvement = () => {
  return (
    <div>
      <div className="involvement-title">
        Get Involved!
      </div>
      <div className="involvement-subcontainer-image-slider">
        <SimpleImageSlider
          width={448}
          height={252}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </div>
      <div className="involvement-subtitle">
        Are you interested in contributing to APAL? Take a look at some of the ways to participate in this great organization. You can:
      </div>
      <div className="involvement-container">
        <div className="involvement-subcontainer">
          <div className="involvement-subcontainer-title">
            Volunteer
          </div>
          <div className="involvement-subcontainer-text">
            We are currently in need of volunteers experienced in event organizing, project management, and secretarial experience. Other needs occasionally arise, so if you have another set of interests, skills and/or experience, we would still love to hear from you and add you to our pool of volunteers.
          </div>
        </div>
        <div className="involvement-subcontainer">
          <div className="involvement-subcontainer-title">
            Sponsor an Event
          </div>
          <div className="involvement-subcontainer-text">
            To sponsor an event, please contact Rita Liu at <b>apalconnect@aol.com</b>.
          </div>
        </div>
        <div className="involvement-subcontainer">
          <div className="involvement-subcontainer-title">
            Donate
          </div>
          <div className="involvement-subcontainer-text">
            If you would like to donate, please contact Rita Liu at <b>apalconnect@aol.com</b> or send a check to:
            <div className="display-linebreak">
              <b>Asian-Pacific Association of Longmont</b>
            </div>
            <div className="display-linebreak">
              <b>P.O. Box 1283</b>
            </div>
            <div className="display-linebreak">
              <b>Longmont, CO 80502.</b>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Involvement;
