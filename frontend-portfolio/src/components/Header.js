import React from "react";
import Logo from "../1_images/logo-black.png";
// import HeaderStyle from "../styled-components/HeaderStyle";
import * as S from "../styled-components/HeaderStyle";

const Header = () => {
  return (
    // <HeaderStyle>
    <header>
      <S.HeaderContainer>
        <S.LogoImage>
          <img src={Logo} alt="logo" />
        </S.LogoImage>

        <S.NavManusContainer>
          <S.NavMenus>
            <p className="nav-menus">My Story</p>
          </S.NavMenus>
          <S.NavMenus>
            <p className="nav-menus">What I Love</p>
          </S.NavMenus>
          <S.NavMenus>
            <p className="nav-menus">Contact</p>
          </S.NavMenus>
        </S.NavManusContainer>
      </S.HeaderContainer>
    </header>
    // </HeaderStyle>
  );
};

export default Header;
