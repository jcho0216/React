import React from "react";
import Logo from "../1_images/logo-black.png";
import * as S from "../styled-components/HeaderStyle";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <HeaderStyle>
    <header>
      <S.HeaderContainer>
        <S.LogoImage>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </S.LogoImage>

        <S.NavManusContainer>
          <S.NavMenus>
            <Link
              to="/AboutME"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Me
            </Link>
          </S.NavMenus>

          <S.NavMenus>
            <Link
              to="/WhatILove"
              style={{ textDecoration: "none", color: "black" }}
            >
              What I Love
            </Link>
          </S.NavMenus>

          <S.NavMenus>
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </S.NavMenus>
        </S.NavManusContainer>
      </S.HeaderContainer>
    </header>
    // </HeaderStyle>
  );
};

export default Header;
