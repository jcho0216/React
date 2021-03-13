import React from "react";
import * as S from "../styled-components/AboutMeStyle";
import MyPicture from "../1_images/MyPicture.png";

const AboutMe = () => {
  return (
    <S.Container>
      <S.MyPicture>
        <img src={MyPicture} alt="MyPic" />
      </S.MyPicture>
      <S.TextContainer>
        <S.AboutMe>About Me.</S.AboutMe>
        <h3>Hi There 👋</h3>
        <S.AboutMeText>
          <S.InlineBlock>
            <p>My Name is</p> 
            <S.MakeTextPinky>&nbsp;Junseo, CHO</S.MakeTextPinky>
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
          <p>My Goal Is To Become A</p>
          <S.MakeTextPinky>World Leading Frontend Developer</S.MakeTextPinky>
        </S.AboutMeText>
      </S.TextContainer>
    </S.Container>
  );
};

export default AboutMe;
