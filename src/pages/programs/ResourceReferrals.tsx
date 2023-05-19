import React from "react";
import "../../stylesheets/Programs/ResourceReferral.css";

const ResourceReferrals = () => {
  return (
    <div>
      <div className="referral-title">
        Resource Referrals
      </div>
      <div className="referral-subtitle">
        Since each situation is unique, we respond to each request for community resource referrals differently. Some example of resource referrals include assistance in securing translation and interpretation services, help finding language and citizenship classes, and information regarding medical and legal providers.
        We work with several organizations, including El Comite and Longmont’s Community and Neighborhood Resources Department.
      </div>
      <div className="referral-subtitle">
        Once you send a request for assistance through our email <b>apalconnect@aol.com</b>, we will then assign a volunteer to get in touch with you to determine the nature of your request.
        Our volunteers will research existing services provided by the city, school district, non-profits, and other resources to find appropriate services for you. 
        Afterwards, our volunteer will follow up with you to determine the next best steps to meet your needs.
        Depending on your language level, our volunteers may serve as an intermediary between you and a service you're requesting.
        It may take multiple trips to the service provider, and the volunteer may have to remain on the project until it's resolved.
        Please note that if the request is only for information, we may be able to help solely through email.
        If you do not have language difficulties, then we will directly provide the service contact information to you.
      </div>
    </div>
  );
};

export default ResourceReferrals;
