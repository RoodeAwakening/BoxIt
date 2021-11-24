import React, { useContext, useEffect, useState } from "react";
import styles from './NavModal.module.css'

import Modal from "react-modal";
import NavLinks from "../../Atoms/NavLinks/NavLinks";
import LogoutButton from "../../auth/LogoutButton";

//styling for modal
const customStyles = {
  content: {
    top: "20em",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

Modal.setAppElement("#root");

function NavModal({children, navModalIsOpen, setNavModalIsOpen,  setAuthenticated }) {

  const closeNavModal = (e)=>{
    setNavModalIsOpen(false)
  }
  return (
    <Modal isOpen={navModalIsOpen} style={customStyles}>

      <div className={styles.nav_container_exit}>
        <button onClick={closeNavModal}>
          <i className="fas fa-times loginexit"> close </i>
        </button>
      </div>

    <div className={styles.nav_container}>
    <button onClick={closeNavModal}>
    <NavLinks link={'/'} pageName={'Home'} />
    <NavLinks link={'/workout'} pageName={'Start a new workout'}/>
    <NavLinks link={'/groups'} pageName={'Groups'}/>
    <NavLinks link={'/my_progress'} pageName={'Progress Photos'}/>
    <NavLinks link={'/action_shots'} pageName={'Action Shots'}/>
    <NavLinks link={'/about'} pageName={'About'}/>
    <LogoutButton setAuthenticated={setAuthenticated} />
    </button>
    </div>
    </Modal>
  )
}

export default NavModal
