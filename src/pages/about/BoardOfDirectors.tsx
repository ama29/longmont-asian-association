import React from "react";
import "../../stylesheets/About/BoardOfDirectors.css";

import RitaLiu from '../../images/people/RitaLiu.jpg'
import XiaoZhang from '../../images/people/XiaoZhang.jpg'
import CrystalYu from '../../images/people/CrystalYu.jpg'
import LilyPan from '../../images/people/LilyPan.jpg'
import LucyLu from '../../images/people/LucyLu.jpeg'
import JaneLim from '../../images/people/JaneLim.png'
import YanJin from '../../images/people/YanJin.png'
import Karen from '../../images/people/Karen.jpg'
import NaCheng from '../../images/people/NaCheng.png'
import CarrieAdams from '../../images/people/CarrieAdams.jpg'

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
        <img src={JaneLim} className="bod-image-left" alt="JaneLim" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Jane Lim, Vice President
          </div>
          <div className="bod-text-left">
            Born in Taipei, Taiwan, Jane's family immigrated to Southern California in 1979 before she made Colorado her home in 1987. The allure of the mountains and the distinct four seasons captivated her heart. Jane's passion for education and her role as a cultural bridge between Chinese and other cultures have been evident throughout her journey. Her dedication to fostering cultural understanding and appreciation led her to serve as the former director of the Confucius Institute at the Community College of Denver from 2013 to 2020.

            For over a decade, Jane has been a steadfast supporter of A-PAL's annual Lunar New Year event, contributing her time and expertise to ensure its success. In April 2023, she proudly joined the A-PAL board, eager to deepen her commitment to the community and strengthen the bonds within our vibrant multicultural landscape.

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
        <img src={NaCheng} className="bod-image-left" alt="Na Chen" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Na Chen, Secretary
          </div>
          <div className="bod-text-left">
            Na Chen was born in Shanghai, China. After receiving her degree in International
            Logistic from SMU, she worked for Port of Shanghai and Fastenal Asia for over
            ten years. She moved to San Francisco with her family in 2008 and continues her
            career in Supply Chain field to date. Sodium’s specialized work in product
            sourcing, negotiation and leadership has driven her career in manufacturing,
            construction and consumer product industry for over two decades. She moved to
            Longmont with her family in 2021. She enjoys reading, writing calligraphy and
            scrapbooking.

          </div>
        </div>
      </div>
      <div className="bod-right-flexbox">
        <div className="bod-right-profile">
          <div className="bod-title">
            Yan Jin, Hospitality Coordinator
          </div>
          <div className="bod-text-right">
            Yan was born in China, where she lived in both Beijing and Shanghai. She received her bachelor’s degree in Interior & Architecture design from Washington State University. She is currently working for the City of Longmont in the GIS group. In addition to volunteering for the Asian-Pacific Association of Longmont, she is also a member of the Longmont Multicultural Action
          </div>
        </div>
        <img src={YanJin} className="bod-image-right" alt="YanJin" />
      </div>
      <div className="bod-left-flexbox">
        <img src={LucyLu} className="bod-image-left" alt="LucyLu" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Lucy Lu, Volunteer Coordinator
          </div>
          <div className="bod-text-left">
            Lucy was born in China and graduated from Shanghai Industrial University where she received her degree in Computer Science. She worked in the electronic engineering industry in China, Singapore and the United States for 18 years. Lucy serves as an A-PAL board member and works on A-PAL’s Annual Lunar New Year Celebration.
          </div>
        </div>
      </div>
      <div className="bod-right-flexbox">
        <div className="bod-right-profile">
          <div className="bod-title">
            Carrie Adams, Silver Creek Leadership Academy Partner
          </div>
          <div className="bod-text-right">
            Carrie Adams was raised in Boulder Colorado and has been the  Program Director for the Silver Creek Leadership Academy (SCLA) since its inception in 2009.  Carrie is passionate about helping young people engage in the community, and understand other cultures as they improve their leadership skills.  This passion led to connecting A-Pal and SCLA to partner allowing students to volunteer at A-Pal events and create meaningful connections to the Asian Culture.
          </div>
        </div>
        <img src={CarrieAdams} className="bod-image-right" alt="CarrieAdams" />
      </div>
      <div className="bod-left-flexbox">
        <img src={Anonymous} className="bod-image-left" alt="anonymous" />
        <div className="bod-left-profile">
          <div className="bod-title">
            Karen Tao, Treasurer
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
