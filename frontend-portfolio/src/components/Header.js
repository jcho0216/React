import React from 'react';
import Logo from '../images/logo-black.png';
import HeaderStyle from './styled-components/HeaderStyle';

const Header = () => {
    return (
        <HeaderStyle>
            <header>
                <div className="header-container">
                    <img src={Logo} alt="logo" className="logo-image"/>
                    <div className="nav-menus-container">
                        <p className="nav-menus">My Story</p>
                        <p className="nav-menus">What I Love</p>
                        <p className="nav-menus">Contact</p>
                    </div>
                    
                </div>
            </header>
        </HeaderStyle>
        
    );
};

export default Header;