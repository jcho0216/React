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
  margin: 100px 170px;
  padding: 0;
  color: white;
`;

export const TextsContainerInner = styled.div`
  height: 55px;
  overflow: hidden;
  p {
    font-size: 40px;
    margin: 0;
  }

  img {
    margin: 30px 0;
  }
`;


export const MainText = styled.h1`
  font-size: 120px;
  margin: 0;
`;



export const Images = styled.div`
  margin: 0;
  padding: 0;
`;

export const AusPic = styled.div`
  display: flex;

  img {
    position: relative;
    right: 10px;
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
