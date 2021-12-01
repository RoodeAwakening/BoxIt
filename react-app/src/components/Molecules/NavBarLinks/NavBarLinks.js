import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import NavLinks from '../../Atoms/NavLinks/NavLinks'
import LogoutButton from '../../auth/LogoutButton'
import NavModal from '../NavModal/NavModal'
import styles from './NavBarLinks.module.css'

function NavBarLinks({ setAuthenticated }) {
  const [navModalIsOpen, setNavModalIsOpen] = useState(false);

  const changeNavModal = ()=>{
    setNavModalIsOpen(true)
  }

  return (
    <div className={styles.navBar_links_container}>
      <div className={styles.navBar_links_container__mobile}>

<Button text={"Menu"} onClick={changeNavModal}/>
    <NavModal
    navModalIsOpen={navModalIsOpen}
    setNavModalIsOpen={setNavModalIsOpen}
    />
    </div>
    <div className={styles.navBar_links_container__desktop}>
    <NavLinks link={'/'} pageName={'Home'}/>
    <NavLinks link={'/workout'} pageName={'Start a new workout'}/>
    <NavLinks link={'/groups'} pageName={'Groups'}/>
    <NavLinks link={'/my_progress'} pageName={'Progress Photos'}/>
    <NavLinks link={'/action_shots'} pageName={'Action Shots'}/>
    <NavLinks link={'/about'} pageName={'About'}/>
    <LogoutButton setAuthenticated={setAuthenticated} />
    </div>
    
    </div>
  )
}

export default NavBarLinks
