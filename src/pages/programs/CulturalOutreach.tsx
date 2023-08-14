import React from "react";
import "../../stylesheets/Programs/CulturalOutreach.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faLanguage, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

const CulturalOutreach = () => {
  return (
    <div>
      <div className="outreach-title">
        Cultural Outreach
      </div>
      <div className="outreach-subtitle">
        Our cultural outreach program introduces Asian culture to the participants. This program aims to create cultural connections, foster curiosity, celebrate diversity, and open dialogues with students and other community members.        </div>
      <div className="outreach-container">
        <div className="outreach-subcontainer">
          <FontAwesomeIcon icon={faPaintBrush} className="paintbrush-icon" />
          <div className="outreach-subcontainer-title">
            Art and Culture Workshops
          </div>
          <div className="outreach-subcontainer-text">
            Each year, we offer workshops for the Lunar New Year celebration volunteering students from Silver Creek Leadership Academy that centered in Asian culture such as Chinese brush painting, Chinese calligraphy, origami, and paper-cutting arts.          </div>
        </div>
        <div className="outreach-subcontainer">
          <FontAwesomeIcon icon={faHandshakeAngle} className="fa-handshake" />
          <div className="outreach-subcontainer-title">
            Volunteers and Mentorship
          </div>
          <div className="outreach-subcontainer-text">
            We reach out to local schools, businesses and nonprofit organizations to increase our visibility and broaden our scope of cultural engagement.
            We also foster a mentoring program with the Silver Creek Leadership Academy. President and founder Rita Liu personally mentors students in leadership and management, with the annual Lunar New Year event serving as the students’ capstone project.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalOutreach;
