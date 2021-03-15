import React from "react";
import * as S from "../styled-components/SkillSetStyle";
import gsap from "../../1_images/TechStack/gsap.png";
import html5 from "../../1_images/TechStack/html5.png";
import css3 from "../../1_images/TechStack/css3.png";
import react from "../../1_images/TechStack/react.png";
import typescript from "../../1_images/TechStack/typescript.png";
import javascript from "../../1_images/TechStack/javascript.png";

const SkillSet = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.TextStyle>
          <p>Tech Stack.</p>
        </S.TextStyle>
        <S.TechStackImgContainer>
          <img src={html5} alt="html5" />
          <img src={css3} alt="css3" />
          <img src={javascript} alt="javascript" />
          <img src={react} alt="react" />
          <img src={typescript} alt="typescript" />
          <img src={gsap} alt="gsap" />
        </S.TechStackImgContainer>
      </S.TextContainer>
    </S.Container>
  );
};

export default SkillSet;
