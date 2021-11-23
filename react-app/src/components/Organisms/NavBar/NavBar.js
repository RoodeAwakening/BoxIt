import React from 'react'
import Logo from '../../Atoms/Logo/Logo'
import NavLinks from '../../Atoms/NavLinks/NavLinks'
import NavBarLinks from '../../Molecules/NavBarLinks/NavBarLinks'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navbar_container}>
      <Logo/>
      <NavBarLinks/>
  
    </div>
  )
}

export default NavBar
