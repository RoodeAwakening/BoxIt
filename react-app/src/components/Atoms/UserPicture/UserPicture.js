import React from 'react'

import styles from './UserPicture.module.css'

function UserPicture({photo}) {
  return (
    <div className={styles.userPciture_container}>
      <img src={photo}/>
    </div>
  )
}

export default UserPicture
