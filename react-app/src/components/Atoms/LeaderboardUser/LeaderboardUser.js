import React from "react";
import styles from "./LeaderboardUser.module.css";

function LeaderboardUser({
  position,
  profile_photo,
  userName,
  workoutsComplete,
}) {
  return (
    <div className={styles.LeaderboardUser_container}>
      <div>
        <h2>{`#${position}`}</h2>
      </div>
      <div>
        <img src={profile_photo} />
      </div>
      <div>
        <h3>{userName}</h3>
      </div>
      <div>
        <h3>{workoutsComplete}</h3>
      </div>
    </div>
  );
}

export default LeaderboardUser;
