import React from "react";
import "../../stylesheets/Events/ChineseNewYear.css";
import Zodiac from "../../images/events/zodiac-2023.png";

const ChineseNewYear = () => {
  return (
    <div className="cny-container">
      <div className="cny-title">
        Lunar New Year
      </div>
      <img src={Zodiac} className="zodiac" alt="2023-zodiac" />
      <div className="cny-text">
        Lunar New Year is one of the most important celebrations for Chinese, Vietnamese, Korean, Singaporean, and other East and Southeastern Asian cultures.
        The holiday marks the beginning of a new year on the traditional lunar calendar. China’s Lunar New Year is known as the Spring Festival or Chūnjié (春节/春節) in Mandarin, while for example, Koreans call it Seollal (설날), and Vietnamese refer to it as Tết.
        <br></br>
        <br></br>
        Every year, we host a free open-to-public event at Silver Creek High School to celebrate the Lunar New Year.
        Although many performance and activities change on a year to year basis, we have a few favorites that make an annual appearance!
        The next Lunar New Year will be on February 24, 2024.
      </div>
    </div>
  );
};

export default ChineseNewYear;
