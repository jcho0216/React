import React from "react";
import { Link } from "react-router-dom";
import '../App.scss';

const Hamburger = () => {
  return <div className='hamburger-menu'>
    <div className="menu-secondary-background-color"></div>
    <div className="menu-layer">
      <div className="menu-city-background">

      </div>
      <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li><Link to='/opportunities'>Opportunities</Link></li>
                  <li><Link to='/solutions'>Solutions</Link></li>
                  <li><Link to='/contact-us'>Contact us</Link></li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque purus quis odio aliquet egestas. Sed in enim porttitor, ullamcorper leo at, congue purus. Etiam malesuada bibendum sem, eget imperdiet tortor scelerisque accumsan. Integer placerat eget nulla nec tempus. Nunc sit amet hendrerit libero, ut ornare est. Cras suscipit aliquam risus, eget placerat massa iaculis vel. Praesent euismod non nisl nec maximus. Donec semper, erat sit amet imperdiet porta, dolor turpis suscipit erat, a accumsan ante dolor a augue. Donec iaculis eros non elit auctor egestas. Fusce viverra posuere viverra. Suspendisse luctus sollicitudin arcu, non rhoncus enim.</p>
              </div>
              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Fransisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>;
};

export default Hamburger;
