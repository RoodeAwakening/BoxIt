import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import UserProfilePhotoBlock from '../../Atoms/UserProfilePhotoBlock/UserProfilePhotoBlock'
import UserStats from '../../Molecules/UserStats/UserStats';
import styles from './UserDataBlock.module.css'

function UserDataBlock() {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className={styles.UserDataBlock_container}>
      

      <UserProfilePhotoBlock profilePhoto={sessionUser.profile_photo} userName={sessionUser.user_name}/>
      {/* <UserStats/> */}
      
      
    </div>
  )
}

export default UserDataBlock
