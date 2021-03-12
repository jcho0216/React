import styled from "styled-components";

export const Container = styled.div`
  visibility: hidden;
  overflow: hidden;
  background-color: black;
  width: 100%;
  height: 90vh;
`;

export const TextsContainer = styled.div`
  float: left;
  margin: 180px 170px;
  padding: 0;
  color: white;
`;

export const TextsContainerInner = styled.div`
  height: 64px;
  overflow: hidden;
  margin-top: 10px;
  h3 {
    font-size: 40px;
    margin: 10px ;
    opacity: 0.5;
  }

  P {
    margin-left: 10px;
    font-size: 25px;
    opacity: 0.7;
    
  }
`;

export const WhiteLine = styled.div`
  width: 700px;
  height: 3px;
  border-radius: 10px;
  background-color: white;
  margin: 30px 0 0 0;
`;

export const MainText = styled.h1`
  font-size: 120px;
  margin: 0;
  color: white;

`;

export const Images = styled.div`
  margin: 0;
  padding: 0;
`;

export const AusPic = styled.div`
  display: flex;

  img {
    position: relative;
    top: 80px;
    margin-left: 100px;
    width: 700px;
    width: 550px;

    border-radius: 20px;
  }
`;

export const MePic = styled.div`
  img {
    width: 400px;
    height: 533.33px;

    border-radius: 20px;
  }
`;
