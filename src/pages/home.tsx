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
          <a href="/past-events"> See more past events
            <span> &#8594;</span>
          </a>
        </div>
        <div className="home-activity-subcontainer-text">
          Our annual Chinese Lunar New Year celebration happened on February 4th, 2023. This was a free and public event at Silver Creek High School featuring a lion dance performance, qipao showcase,
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
          The Asian-Pacific Association of Longmont (A-PAL) is a 501(c)(3) nonprofit organization dedicated to supporting Longmont’s multicultural initiative by promoting diversity and bridging cultural gaps in the community. A-PAL not only seeks to support cultural and artistic projects, but also encourages active participation in city programs, especially in the area of education. By working to ensure that Longmont’s Asian community members utilize existing public programs and services, A-PAL seeks to develop ties within other branches of the community. A-PAL also provides referral assistance to those who have specific needs or are unfamiliar with available resources.
        </div>
      </div>
    </div>
  );
};

export default Home;