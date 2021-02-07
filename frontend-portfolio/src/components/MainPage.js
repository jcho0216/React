import React, { useEffect, useRef } from 'react';

//image import
import whiteLinePic from '../1_images/white-line.png';
import mePic from '../1_images/me.jpeg';
import ausPic from '../1_images/aus.jpg';

//style import
import MainPageStyle from '../styled-components/MainPageStyle';

//gsap 
import { TimelineLite ,TweenMax, Power3 } from 'gsap';

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

        console.log(mainText, subText, whiteLine, greetingLine);
        const aus = images.firstElementChild;
        const me = images.lastElementChild;
        TweenMax.to(app, 0, {css: {visibility: 'visible'}})
        tl.from(aus, 1.2, {y: 1000, ease: Power3.easeOut}, 'Start')
        .from(aus.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .3)
        .from(me, 1.2, {y: 1000, ease: Power3.easeOut}, .4)
        .from(me.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .3 )
        
        TweenMax.to(texts, 1, {css: {opacity: 1}})
        tl.staggerFrom([mainText, subText.children, whiteLine.children, greetingLine.children], 1 ,{
            y: 44,
            ease: Power3.easeOut,
            delay: .8,
        }, .3, 'Start')
        
    });

    return (
        <>
        <MainPageStyle>
            <div className="container" ref={el => app = el}>
                <div className="texts-container" ref={el => texts = el}>

                    {/* <div className="texts-container-inner"> */}
                    <h1 className="main-text">Junseo, CHO</h1>
                    {/* </div> */}

                    <div className="texts-container-inner">
                        <p className="sub-text">I am a frontend addict</p>
                    </div>
                    <div className="texts-container-inner">
                        <img src={whiteLinePic} alt="whiteLine"/>
                    </div>
                    <div className="texts-container-inner">
                        <div className="greeting-text-container">
                            <p className="greeting-text">Thank You for viewing my website ^^ </p>
                        </div>
                    </div>
                    
                </div>
                
                <div className="images" ref={el => images = el}>
                    <div className="images-aus">
                        <img src={ausPic} alt="ausPic" className="aus"/>
                    </div>
                    <div className="images-me">
                        <img src={mePic} alt="me" className="me" />
                    </div>
                </div>
            </div>
            </MainPageStyle>
        </>
    );
};

export default MainPage;