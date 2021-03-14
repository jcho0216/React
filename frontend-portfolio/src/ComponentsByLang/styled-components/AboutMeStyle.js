import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  background-color: #6b778d;
  height: 120vh;
`;

export const MyPicture = styled.div`
  display: inline;
  img {
    width: 600px;
    height: 840px;
    margin-top: 120px;
    margin-left: 185px;
  }
`;

export const TextContainer = styled.div`
font-family: "Inconsolata", monospace;
  color: white;
  flex-direction: column;
  display: flex;
  float: right;
  text-align: left;
  margin: 80px 200px 0 0;
`;

export const AboutMeText = styled.div`

color: #FFFFFF;
  p {
    font-size: 40px;
    margin: 10px 0;
    /* font-family: "Inconsolata", monospace; */
  }
`;

export const InlineBlock = styled.div`

  p {
    display: inline-block;
  }
`;

export const MakeTextPinky = styled.p`
  color: #ffb6b9;
`;

export const AboutMe = styled.h1`
  /* font-family: 'Inconsolata', monospace; */
  font-size: 45px;
`;
