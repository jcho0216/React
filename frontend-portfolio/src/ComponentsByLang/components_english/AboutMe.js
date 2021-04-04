import React, { useRef, useEffect } from "react";
import * as S from "../styled-components/AboutMeStyle";
import MyPicture from "../../1_images/MyPicture.png";
import { TimelineLite } from 'gsap'
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
    Aos.refresh();

  },[])

  let MyPictureRef = useRef(null); 
  let Container = useRef(null);
   
  console.log(Container);

  let tl = new TimelineLite();

  tl.from(MyPictureRef.current, {
    scrollTrigger: {
      trigger: Container.current,
      start: 'bottom center'
    },
    y: 44
  })
  
  useEffect(()=> {  
    console.log(MyPictureRef);

   

  })

  

  return (
    <S.Container ref={(el) => (Container = el)}>
      <S.MyPicture>
        <img src={MyPicture} alt="MyPic" ref={(el) => MyPictureRef = el} data-aos="fade-up"
     data-aos-anchor-placement="top-center"></img>
      </S.MyPicture>
      <S.TextContainer>
        <S.AboutMe>About Me.</S.AboutMe>
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
