import styled from "styled-components";

export const Container = styled.div`
  visibility: hidden;
  overflow: hidden;
  background-color: #220210;
  width: 100%;
  height: 110vh;
`;

export const TextsContainer = styled.div`
  float: left;
  margin: 220px 170px;
  padding: 0;
  color: #c4d5cd;
`;

export const TextsContainerInner = styled.div`
  height: 64px;
  overflow: hidden;
  margin-top: 10px;
  h3 {
    font-size: 40px;
    margin: 10px ;
    color: #c4d5cd;
  }

  P {
    margin-left: 10px;
    font-size: 25px;
    color: #c4d5cd;
    
  }
`;

export const WhiteLine = styled.div`
  width: 800px;
  height: 3px;
  border-radius: 10px;
  background-color: #c4d5cd;
  margin: 30px 0 0 0;
`;

export const MainText = styled.h1`
  font-size: 120px;
  margin: 0;
  color: white;

`;

export const Images = styled.div`
  /* margin: 0;
  padding: 0; */
`;

export const AusPic = styled.div`
  display: flex;

  img { 
    position: relative;
    top: 80px;
    width: 550px;
    border-radius: 20px;
    
  }
`;

export const MePic = styled.div`
  img {
    width: 400px;
    height: 533.33px;
    margin-left: -100px;
    border-radius: 20px;
  }
`;
