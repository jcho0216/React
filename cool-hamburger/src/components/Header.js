import React, { useState, useEffect } from "react";
import { withRouter ,Link } from "react-router-dom";
import Hamburger from './Hamburger';

const Header = ({history}) => {
  //메뉴를 위한 state
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  })

  //disabled를 위한 state
  const [disabled, setDisabled] = useState(false);

  //useEffect for page changes
  useEffect(()=> {
    history.listen(() => {
      setState({clicked: false, menuName: 'Menu'});
    })
  })

  
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  }

  return <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">HAMBRG</Link>
          </div>
          <div className="menu">
            <button disabled={disabled} onClick={handleMenu}>{state.menuName}</button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state}/>
  </header>;
};

export default withRouter(Header);
