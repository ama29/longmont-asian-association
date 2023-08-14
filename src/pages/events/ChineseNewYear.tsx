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
        Lunar New Year is one of the most important celebrations for Chinese, Vietnamese, Korean, Singaporean, and other Eastertn and South-eastern Asian cultures. The holidy marks the beginning of a new year on the traditional lunar calendar. Lunar New Year in China is know as the Spring Festival or Chūnjié (春节/春節) in Mandarin, while for example, Korean call it Seolla (설날), and Vietnamese refer to it as Tết âm lịch. This event introduces Asian culture to more than 1,500 community members annually from over 90 cultural backgrounds.
        <br></br>
        <br></br>
        Every year, we host a free open-to-public event at Silver Creek High School to celebrate the Lunar New Year.
        Although many performance and activities change on a year to year basis, we have a few favorites that make an annual appearance!
        The next Lunar New Year will be on February 10, 2024, and our 2024 celebration will take place on Saturday, Feb 24, 2024.
      </div>
    </div>
  );
};

export default ChineseNewYear;
