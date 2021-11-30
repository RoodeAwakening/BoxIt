import React from 'react'
import styles from './StartWorkout.module.css'
import { NavLink } from "react-router-dom";

function StartWorkout() {
  return (
    <div className={styles.StartWorkout_container}>
      <NavLink
                    to="/workout"
                    exact={true}
                    activeClassName="active"
                    className="links-each"
                  >
                    Start a new workout
                  </NavLink>
    </div>
  )
}

export default StartWorkout
