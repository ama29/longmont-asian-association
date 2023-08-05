import React from "react";
import "../../stylesheets/Events/InclusiveCommunities.css";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const InclusiveCommunities = () => {
  return (
    <div className="inclusive-communities-container">
      <div className="inclusive-communities-title">
        Inclusive Communities Event
      </div>
      <div className="inclusive-communities-video">
        <YoutubeEmbed embedId="e3pr5I27rZQ" />
      </div>
      <div className="inclusive-communities-text">
        For over 10 years, the Longmont Multicultural Action Committee has organized the Inclusive Communities event which attracts up to 500 attendees. Each cultural group represented is made up of community volunteers who take their valuable time to share their culture through food, dance and conversation.  The Asian-Pacific Association of Longmont (A-PAL) has been a key participant since 2010, providing Asian performances, cultural displays and food demonstrations and sampling each year. Our approximately 30 volunteers are actively involved in planning our participation in the event.
        For example, at the 2015 Inclusive Communities Celebration, guests feasted on Chinese dumplings, sushi, Norwegian cookies, East Indian dishes, Latino rice dishes and African American soul foods, as well as other delicious fare. Over a dozen booths represented different cultures or nationalities represented here in Longmont and featured pictures, books and crafts.
      </div>
    </div>
  );
};

export default InclusiveCommunities;
