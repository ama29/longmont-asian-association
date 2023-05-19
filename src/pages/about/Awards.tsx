import React from "react";
import "../../stylesheets/About/Awards.css";
import Awards1 from "../../images/awards/Awards1.jpg";
import Awards2 from "../../images/awards/Awards2.jpg";
import Awards3 from "../../images/awards/Awards3.jpg";
import Awards4 from "../../images/awards/Awards4.jpg";
import Awards5 from "../../images/awards/Awards5.jpg";
import Awards6 from "../../images/awards/Awards6.jpg";
import Awards7 from "../../images/awards/Awards7.jpg";

const Awards = () => {
  return (
    <div>
      <div className="awards-section-title">
        Awards and Recognitions
      </div>
      <div className="awards-subsection">
        <div className="awards-subsection-title">
          Longmont City Council Community Unity Award presented to founder and president Rita Liu (2013)
        </div>
        <div className="awards-subsection-images">
          <figure className="awards-image-section-1">
            <img src={Awards1} className="awards-image" alt="Awards 1" />
            <figcaption className="figcaption">Founder Rita Liu with Longmont Mayor Coombs</figcaption>
          </figure>
          <figure className="awards-image-section-2">
            <img src={Awards2} className="awards-image" alt="Awards 2" />
            <figcaption className="figcaption">2013 Longmont Community Unity Award</figcaption>
          </figure>
        </div>
      </div>
      <div className="awards-subsection">
        <div className="awards-subsection-title">
          The President’s Volunteer Service Award (signed by President Obama) presented to Rita Liu (2010 - 2016)
        </div>
        <div className="awards-subsection-images">
          <figure className="awards-image-section-1">
            <img src={Awards4} className="awards-image" alt="Awards 4" />
            <figcaption className="figcaption">2013 President’s Service Award</figcaption>
          </figure>
          <figure className="awards-image-section-2">
            <img src={Awards3} className="awards-image" alt="Awards 3" />
            <figcaption className="figcaption">2014 President’s Service Award</figcaption>
          </figure>
        </div>
      </div>
      <div className="awards-subsection">
        <div className="awards-subsection-title">
          2014 and 2015 Silver Creek Leadership Academy Outstanding Mentor Certificate of Appreciation
        </div>
        <div className="awards-subsection-images">
          <figure className="awards-image-section-1">
            <img src={Awards6} className="awards-image" alt="Awards 6" />
            <figcaption className="figcaption">2013-2014 Silver Creek Leadership Academy Outstanding Mentor Certificate of Appreciation</figcaption>
          </figure>
          <figure className="awards-image-section-2">
            <img src={Awards5} className="awards-image" alt="Awards 5" />
            <figcaption className="figcaption">2015 Silver Creek Leadership Academy Outstanding Mentor Certificate of Appreciation</figcaption>
          </figure>
        </div>
      </div>
      <div className="awards-subsection">
        <div className="awards-subsection-title">
          2017 Silver Creek Leadership Academy Lifetime Leadership Award presented to Rita Liu!        </div>
        <div className="awards-subsection-images">
          <figure className="awards-image-section-3">
            <img src={Awards7} className="awards-image" alt="Awards 7" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Awards;
