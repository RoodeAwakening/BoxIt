import React from 'react'
import HoursCompleted from '../../Atoms/HoursCompleted/HoursCompleted'
import Rank from '../../Atoms/Rank/Rank'
import TotalWorkouts from '../../Atoms/TotalWorkouts/TotalWorkouts'
import styles from './UserStats.module.css'

function UserStats() {
  return (
    <div className={styles.UserStats_container}>
      <ul>

      <li><Rank/></li>
      <li><TotalWorkouts/></li>
      <li><HoursCompleted/></li>
      </ul>
      
    </div>
  )
}

export default UserStats
