import React from "react";
import * as S from "../styled-components/AboutMeStyle";
import MyPicture from "../1_images/MyPicture.png";

const AboutMe = () => {
  return (
    <S.Container>
        <S.MyPicture>
          <img src={MyPicture} alt="MyPic" />
        </S.MyPicture>
    </S.Container>
  );
};

export default AboutMe;
