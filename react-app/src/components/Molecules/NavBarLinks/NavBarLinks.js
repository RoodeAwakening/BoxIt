import React from 'react'
import NavLinks from '../../Atoms/NavLinks/NavLinks'
import LogoutButton from '../../auth/LogoutButton'
import styles from './NavBarLinks.module.css'

function NavBarLinks({ setAuthenticated }) {
  return (
    <div className={styles.navBar_links_container}>
    <NavLinks link={'/'} pageName={'Home'}/>
    <NavLinks link={'/workout'} pageName={'Start a new workout'}/>
    <NavLinks link={'/groups'} pageName={'Groups'}/>
    <NavLinks link={'/my_progress'} pageName={'Progress Photos'}/>
    <NavLinks link={'/action_shots'} pageName={'Action Shots'}/>
    <NavLinks link={'/about'} pageName={'About'}/>
    <LogoutButton setAuthenticated={setAuthenticated} />
    
    </div>
  )
}

export default NavBarLinks
