import React, { useEffect, useRef } from "react";

//image import
import mePic from "../1_images/me.jpeg";
import ausPic from "../1_images/aus.jpg";

//style import
// import MainPageStyle from "../styled-components/MainPageStyle";
import * as S from "../styled-components/MainPageStyle";

//gsap
import { TimelineLite, TweenMax, Power3 } from "gsap";

const MainPage = () => {
  let texts = useRef(null);
  let images = useRef(null);
  let app = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    const mainText = texts.firstElementChild;
    const subText = mainText.nextSibling;
    const whiteLine = subText.nextSibling;
    const greetingLine = whiteLine.nextSibling;

    const aus = images.firstElementChild;
    const me = images.lastElementChild;

    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    tl.from(aus, 1.2, { y: 1000, ease: Power3.easeOut }, "Start")
      .from(aus.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.3)
      .from(me, 1.2, { y: 1000, ease: Power3.easeOut }, 0.4)
      .from(me.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.3);

    TweenMax.to(texts, 1, { css: { opacity: 1 } });
    tl.staggerFrom(
      [mainText, subText.children, whiteLine.children, greetingLine.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.4,
      "Start"
    );
  });

  return (
    <>
      <S.Container ref={(el) => (app = el)}>
        <S.TextsContainer ref={(el) => (texts = el)}>
          <S.MainText>Junseo, CHO</S.MainText>
          <S.TextsContainerInner>
            <h3>"Junior FrontEnd Developer"</h3>
          </S.TextsContainerInner>
          <S.TextsContainerInner>
            <S.WhiteLine />
          </S.TextsContainerInner>
          <S.TextsContainerInner>
            <p>Welcome To My Portfolio Web Site, Thanks for visiting !_!</p>
          </S.TextsContainerInner>
        </S.TextsContainer>

        <S.Images ref={(el) => (images = el)}>
          <S.AusPic>
            <img src={ausPic} alt="ausPic" />
          </S.AusPic>
          <S.MePic>
            <img src={mePic} alt="mePic" />
          </S.MePic>
        </S.Images>
      </S.Container>
    </>
  );
};

export default MainPage;
