import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

import logo from '../../images/boxit_logo.png'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-left'>

      <div>
        <img alt="logo" src={logo} id='nav-logo' />
        </div>
      </div>
      <div className='navbar-right'>

      <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <h3>Home</h3>
          </NavLink>
        </div>
  
      <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;