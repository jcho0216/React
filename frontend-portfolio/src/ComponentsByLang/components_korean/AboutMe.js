import React, { useRef } from "react";
import * as S from "../styled-components/AboutMeStyle";
import MyPicture from "../../1_images/MyPicture.png";
import { gsap ,TweenMax, TimelineLite} from 'gsap';


const AboutMe = () => {
  let MyPictureRef = useRef('null');  

  


  return (
    <S.Container>
      <S.MyPicture className="MyPicture">
        <img ref={(el)=> (MyPictureRef = el)} src={MyPicture} alt="MyPic" />
      </S.MyPicture>
      <S.TextContainer>
        <S.AboutMe>나에 대해서.</S.AboutMe>
        <h3>Hi There 👋</h3>
        <S.AboutMeText>
          <S.InlineBlock>
            <p>My Name is</p> 
            <S.MakeTextPinky><strong>&nbsp;Junseo, CHO</strong></S.MakeTextPinky>
          </S.InlineBlock>

          <p>Born on the 16th of February 2004</p>
          <p>I am a student in S.Korea</p>
        </S.AboutMeText>
        <br/><br/><br/>
        <S.AboutMeText>
          <p>I am a very positive student and love</p>
          <p>hanging out with my friends. I also</p>
          <p>love playing sports and video games</p>
        </S.AboutMeText>
        <br /><br/><br/>
        <S.AboutMeText>
          <p>My favourite thing to do in my</p>
          <p>free time is coding</p><br/><br/>
          <p>I Want To Become a </p>
          <S.MakeTextPinky><strong>World Leading Frontend Developer</strong></S.MakeTextPinky>
        </S.AboutMeText>
      </S.TextContainer>
    </S.Container>
  );
};

export default AboutMe;
