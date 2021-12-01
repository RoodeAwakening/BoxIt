import React from 'react'

import logo from "../../../images/boxit_logo.png";
import styles from './Logo.module.css'

function Logo() {
  return (
    <div>
       <a href="/">
            <img alt="logo" src={logo} className={styles.nav_logo} />
          </a>
    </div>
  )
}

export default Logo
