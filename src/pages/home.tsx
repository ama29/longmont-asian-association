import "../stylesheets/Home.css";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: require("../images/events/gallery/2023/lion-dance-1.jpg") },
  { url: require("../images/events/gallery/2023/drums-1.jpg") },
  { url: require("../images/events/gallery/2023/dance-1.jpg") },
  { url: require("../images/events/gallery/2023/qipao-show-1.jpg") },
  { url: require("../images/events/gallery/2023/calliagraphy-1.jpg") }
]

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-activity-subcontainer">
        <div className="home-section-title">
          Recent Activity
        </div>
        <div className="home-subsection-title">
          <a href="https://www.flickr.com/photos/svvsd/albums/72177720305882230"> See the official album here
            <span> &#8594;</span>
          </a>
        </div>
        <div className="home-activity-subcontainer-text">
          Our annual Lunar New Year celebration happened on February 4th, 2023. This was a free and public event at Silver Creek High School featuring a lion dance performance, qipao showcase,
          kung-fu demonstration, music performances, food sampling, calligraphy, origami, chopsticks, and other activities catering to both children and adults.
        </div>
      </div>
      <div className="home-activity-subcontainer-image-slider">
        <SimpleImageSlider
          width={650}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </div>
      <div className="break">
      </div>
      <div className="home-about-subcontainer">
        <div className="home-about-title">
          About Us
        </div>
        <div className="home-about-text-subcontainer">
          The Asian-Pacific Association of Longmont (A-PAL) is a non-profit organization,
          recognized under section 501(c)(3) of the Internal Revenue Code, established in 2010.
          The primary objective of A-PAL is to foster diversity and bridge cultural divides by
          organizing and executing cultural, educational, and artistic projects and events.
          Furthermore, A-PAL strives to promote active engagement in city and school district
          initiatives and activities, as well as encourage optimal utilization of programs and
          services provided by public institutions. A-PAL also offers referral assistance to
          individuals who require aid or are unfamiliar with available resources.
        </div>
      </div>
    </div>
  );
};

export default Home;