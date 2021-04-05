import React, { useEffect } from "react";
import * as S from "../styled-components/SkillSetStyle";
import gsap from "../1_images/TechStack/gsap.png";
import html5 from "../1_images/TechStack/html5.png";
import css3 from "../1_images/TechStack/css3.png";
import react from "../1_images/TechStack/react.png";
import typescript from "../1_images/TechStack/typescript.png";
import javascript from "../1_images/TechStack/javascript.png";

import 'aos/dist/aos.css';
import Aos from "aos";


const SkillSet = () => {

  useEffect(() => {
    Aos.init({
      easing: 'ease-out-back',
      duration: "800",
      delay: "100"
    })
  })

  return (
    <S.Container>
      <S.TextContainer>
        <S.TextStyle>
          <p>Tech Stack.</p>
        </S.TextStyle>
        <S.TechStackImgContainer>
          <img src={html5} alt="html5" data-aos="fade-up"/>
          <img src={css3} alt="css3" data-aos="fade-up" data-aos-delay="300"/>
          <img src={javascript} alt="javascript" data-aos="fade-up" data-aos-delay="500"/>
          <img src={react} alt="react" data-aos="fade-up" data-aos-delay="700"/>
          <img src={typescript} alt="typescript" data-aos="fade-up" data-aos-delay="800"/>
          <img src={gsap} alt="gsap" data-aos="fade-up" data-aos-delay="900"/>
        </S.TechStackImgContainer>
      </S.TextContainer>
    </S.Container>
  );
};

export default SkillSet;
