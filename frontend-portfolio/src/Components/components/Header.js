import React, { useState } from "react";
import Logo from "../../1_images/logo-black.png";
import * as S from "../styled-components/HeaderStyle";
import github from "../../1_images/github.png";
import instagram from "../../1_images/instagram.png";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <header>
      <S.HeaderContainer>
        <S.LogoImage>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </S.LogoImage>

        <S.NavManusContainer>
          <S.NavMenus>
            <a
              href="http://www.github.com/jcho0216"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </S.NavMenus>
          <S.NavMenus>
            <a
              href="http://www.instagram.com/_jun_ins_"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </S.NavMenus>

        </S.NavManusContainer>
      </S.HeaderContainer>
    </header>

  );
};

export default Header;
