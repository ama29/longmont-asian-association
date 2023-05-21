import React from "react";
import CNY2016 from "../../images/events/gallery/2016/cny-2016-1.jpg";
import CNY2019 from "../../images/events/gallery/2019/2019-front.jpg";
import CNY2019_1 from "../../images/events/gallery/2019/2019-poster-front.jpg";
import CNY2019_2 from "../../images/events/gallery/2019/2019-poster-back.jpg";
import CNY2020 from "../../images/events/gallery/2020/2020-front.jpg";
import CNY2021 from "../../images/events/gallery/2021/2021-front.png";

import Gallery2014 from "../../lib/Gallery2014";
import Gallery2015 from "../../lib/Gallery2015";
import Gallery2017 from "../../lib/Gallery2017";
import Gallery2018 from "../../lib/Gallery2018";
import Gallery2023 from "../../lib/Gallery2023";
import "../../stylesheets/Events/PastEvents.css";

const PastEvents = () => {
  return (
    <div className="events-container">
      <div className="events-title">
        Past Events
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2023 - Year of the Rabbit
          <hr></hr>
        </div>
        <div className="cny-past-events-text">
          For more photos, see the official album
          <a href="https://www.flickr.com/photos/svvsd/albums/72177720305882230" className="link">
            here.
          </a>
        </div>
        <Gallery2023 />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2022 - Year of the Tiger
          <hr></hr>
        </div>
        <div className="cny-past-events-text">
          There was no Chinese New Year hosted in 2022 due to COVID concerns.
        </div>
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2021 - Year of the Ox
          <hr></hr>
        </div>
        <img src={CNY2021} className="cny-image" />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2020 - Year of the Rat
          <hr></hr>
        </div>
        <img src={CNY2020} className="cny-image-vertical" />
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2019 - Year of the Pig
          <hr></hr>
        </div>
        <div className="2019-images-container">
          <img src={CNY2019} className="cny-image-vertical" />
          <img src={CNY2019_1} className="cny-image" />
          <img src={CNY2019_2} className="cny-image" />
        </div>
      </div>
      <div className="events-subcontainer">
        <div className="events-subcontainer-title">
          Chinese New Year 2018 - Year of the Dog
          <hr></hr>
        </div>
        <div className="cny-past-events-text">
          For more photos, see the official albums
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
        <img src={CNY2016} className="cny-image" />
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
