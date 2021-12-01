import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './NavLinks.module.css'

function NavLinks({link, pageName}) {
  return (
    <div className={styles.navLinks_div_container}>
      <NavLink to={link} exact={true} activeClassName="active">
            <h4>{pageName}</h4>
          </NavLink>
    </div>
  )
}

export default NavLinks
