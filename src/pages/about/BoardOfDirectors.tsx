import React from "react";
import "../../stylesheets/About/BoardOfDirectors.css";

import RitaLiu from '../../images/people/RitaLiu.jpg'
import XiaoZhang from '../../images/people/XiaoZhang.jpg'
import CrystalYu from '../../images/people/CrystalYu.jpg'
import LilyPan from '../../images/people/LilyPan.jpg'
import LucyLu from '../../images/people/LucyLu.jpeg'
import Anonymous from '../../images/people/Anonymous.png'

const BoardOfDirectors = () => {
  return (
    <div className="bod-container">
      <div className="bod-flexbox-title">
        Board of Directors
      </div>
      <div className="bod-left-flexbox">
        <img src={RitaLiu} className="bod-image-left" alt="RitaLiu" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Rita Liu, President
          </div>
          <div className="bod-text-left">
            Rita was born in Shanghai, China.  When the Communist Party took over China, her  family moved to Taiwan.
            After receiving her bachelor’s degree in Accounting, she went to Germany for advanced study in International Economics and European Common Market.
            She then came to the US and worked for IBM in New York for 34 years as an IT Manager and a Certified IBM Consultant.
            She is the founder of the Asian-Pacific Association of Longmont and a member of the Longmont Multicultural Action Committee (LMAC).
          </div>
        </div>
      </div>
      <div className="bod-right-flexbox">
        <div className="bod-right-profile">
          <div className="bod-title">
            Xiao Zhang, Vice President
          </div>
          <div className="bod-text-right">
            Xiao is a first generation immigrant from east China. He got his PhD in Electrical and Computer Engineering from the University of Colorado at Boulder and has been working in the Data Storage industry for 16 years.
            Xiao was the Principal of the Bohua Chinese School from 2007-2010. The Bohua Chinese School is a nonprofit organization with more than 250 students, meeting regularly on Sundays.
            He has been a board member of the Bohua Chinese School since 2007 and continues to serve the program in that capacity.
          </div>
        </div>
        <img src={XiaoZhang} className="bod-image-right" alt="XiaoZhang" />
      </div>
      <div className="bod-left-flexbox">
        <img src={CrystalYu} className="bod-image-left" alt="CrystalYu" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Crystal Yu, Treasurer
          </div>
          <div className="bod-text-left">
            Crystal grew up in Taipei, Taiwan. After working as an accountant at Simmons, an American company, for a few years in Taiwan, she came to the US to study in Minnesota where she received her Master’s Degree in management. After graduating from college, she continued working  as an accountant. Her career brought her to Seattle, Minneapolis and San Jose before she got married and moved to Longmont. Crystal is now a full-time mom and wife who enjoys cooking, gardening and traveling.
          </div>
        </div>
      </div>
      <div className="bod-right-flexbox">
        <div className="bod-right-profile">
          <div className="bod-title">
            Yonghong (Lily) Pan, Publicity
          </div>
          <div className="bod-text-right">
            Yonghong (Lily) Pan was born in Zhejiang Province, China.  She got her bachelor’s degree in Economics in China and worked in Hangzhou, Zhejiang for three years.  Yonghong lived in Japan for three years before moving to Colorado in 1996. Volunteering gives Yonghong a great way to connect with people and support her community. She has been volunteering for the Asian-Pacific Association of  Longmont since its inception in 2010.  She has also volunteered for the Boulder Dance Coalition International Festival and Asian Festival for the past ten years. When she is not volunteering, Yonghong teaches dance and Chinese and writes newspaper articles.
          </div>
        </div>
        <img src={LilyPan} className="bod-image-right" alt="LilyPan" />
      </div>
      <div className="bod-left-flexbox">
        <img src={LucyLu} className="bod-image-left" alt="LucyLu" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Lucy Lu, Volunteer Coordinator
          </div>
          <div className="bod-text-left">
            Lucy was born in China and graduated from Shanghai Industrial University where she received her degree in Computer Science. She worked in the electronic engineering industry in China, Singapore and the United States for 18 years. Lucy serves as an A-PAL board member and works on A-PAL’s Annual Chinese New Year Celebration.
          </div>
        </div>
      </div>
      <div className="bod-mid-flexbox">
        <div className="bod-mid-profile">
          <div className="bod-title-mid">
            Open Position - Secretary
          </div>
          <img src={Anonymous} className="bod-image-mid" alt="Anonymous" />
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
