import React from "react";
import "../../stylesheets/Programs/CulturalOutreach.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faLanguage, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: require("../../images/outreach/APAL-volunteers-1.jpg") },
  { url: require("../../images/outreach/CultrualOutreachYouthAlternative.jpg") },
  { url: require("../../images/outreach/CulturalOutreachMentorship.jpg") }
]

const CulturalOutreach = () => {
  return (
    <div>
      <div className="outreach-title">
        Cultural Outreach
      </div>
      <div className="outreach-subtitle">
        Our cultural outreach program introduces Asian culture to more than 1,000 community members from over 42 different cultural backgrounds. This program aims to create cultural connections, foster curiosity, and open dialogues with schools and other members of our community.
      </div>
      <div className="outreach-container">
        <div className="outreach-subcontainer">
          <FontAwesomeIcon icon={faPaintBrush} className="paintbrush-icon" />
          <div className="outreach-subcontainer-title">
            Art and Culture Classes
          </div>
          <div className="outreach-subcontainer-text">
            We offer classes centered in Asian culture such as abacus history and instruction, brush painting, origami, and paper-cutting arts.
          </div>
        </div>
        <div className="outreach-subcontainer">
          <FontAwesomeIcon icon={faLanguage} className="fa-language" />
          <div className="outreach-subcontainer-title">
            Language Classes
          </div>
          <div className="outreach-subcontainer-text">
            Not only do we have beginner Chinese language classes, but our influence has also helped other institutions (such as Silver Creek High School) to add Chinese language classes to its own curriculum.
          </div>
        </div>
        <div className="outreach-subcontainer">
          <FontAwesomeIcon icon={faHandshakeAngle} className="fa-handshake" />
          <div className="outreach-subcontainer-title">
            Volunteers and Mentorship
          </div>
          <div className="outreach-subcontainer-text">
            We reach out to local schools, businesses and nonprofit organizations to increase our visibility and broaden our scope of cultural engagement.
            We also foster a mentoring program with the Silver Creek Leadership Academy. President and founder Rita Liu personally mentors students in leadership and management, with the annual Chinese New Year event serving as the students’ capstone project.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalOutreach;
