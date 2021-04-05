import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  
`;

export const LogoImage = styled.div`
  img {
    width: 115px;
    height: 99px;
    margin-left: 190px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      width: 116px;
      height: 100px;
    }
  }
`;

export const NavManusContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  margin-left: 1200px;
  
`;

export const NavMenus = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0; */
  img {
    width: 32px;
    height: 32px;
  }

  img:hover {
    background-color: pink;
  }
  
`;
