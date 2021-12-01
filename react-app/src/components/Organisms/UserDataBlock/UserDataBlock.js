import React from "react";
import { useSelector, useDispatch } from "react-redux";

import UserProfilePhotoBlock from "../UserProfilePhotoBlock/UserProfilePhotoBlock";
import UserStats from "../../Molecules/UserStats/UserStats";
import styles from "./UserDataBlock.module.css";
import StartWorkout from "../../Atoms/StartWorkout/StartWorkout";

function UserDataBlock() {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className={styles.UserDataBlock_container}>
      <div>
        <UserProfilePhotoBlock
          profilePhoto={sessionUser.profile_photo}
          userName={sessionUser.user_name}
        />
      </div>
      <div className={styles.UserDataBlock_container__right}>
        <StartWorkout />
      </div>
    </div>
  );
}

export default UserDataBlock;
