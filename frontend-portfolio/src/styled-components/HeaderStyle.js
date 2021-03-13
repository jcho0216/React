import styled from "styled-components";

export const HeaderContainer = styled.div`
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
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-left: 900px;
`;

export const NavMenus = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }
`;
