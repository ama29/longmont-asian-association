import React from "react";
import CNY2016 from "../../images/events/gallery/2016/cny-2016-1.jpg";
import Gallery2014 from "../../lib/Gallery2014";
import Gallery2015 from "../../lib/Gallery2015";
import Gallery2017 from "../../lib/Gallery2017";
import Gallery2018 from "../../lib/Gallery2018";
import "../../stylesheets/Events/PastEvents.css";

const PastEvents = () => {
  return (
    <div className="events-container">
      <div className="events-title">
        Past Events
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2018 - Year of the Dog
          <hr></hr>
        </div>
        <div className="cny-2018-photos-link">
          For more photos, see official photos
          <a href="https://www.flickr.com/photos/140354240@N05/sets/72157692404859161" className="link">
            here
          </a>
          and
          <a href="https://www.flickr.com/photos/130061223@N07/sets/72157664209500127/with/39648720235/" className="link">
            here
          </a>
          and
          <a href="https://www.flickr.com/photos/152595028@N06/albums/72157688572696750" className="link">
            here
          </a>
          .
        </div>
        <Gallery2018 />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2017 - Year of the Rooster
          <hr></hr>
        </div>
        <Gallery2017 />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2016 - Year of the Monkey
          <hr></hr>
        </div>
        <img src={CNY2016} className="cny-2016-image" />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2015 - Year of the Sheep
          <hr></hr>
        </div>
        <Gallery2015 />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2014 - Year of the Horse
          <hr></hr>
        </div>
        <Gallery2014 />
      </div>
    </div>
  );
};

export default PastEvents;
