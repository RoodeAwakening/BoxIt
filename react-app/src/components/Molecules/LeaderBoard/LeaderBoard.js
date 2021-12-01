import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeaderboardUser from "../../Atoms/LeaderboardUser/LeaderboardUser";

import { allWorkoutsComplete } from "../../../store/ranking";

import styles from "./LeaderBoard.module.css";

function LeaderBoard() {
  const dispatch = useDispatch();
  const allWorkoutsCompleted = useSelector((state) =>
    Object.values(state.ranking)
  );

  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(allWorkoutsComplete());
  }, [dispatch, sessionUser]);

  // go through each completed workout and give user ranks
  let pos = 0;
  let leaders = allWorkoutsCompleted.map((each, index) => {
    pos += 1;

    return (
      <LeaderboardUser  position={pos} profile_photo={each.profile_photo} userName={each.userName} workoutsComplete={each.workoutsComplete}/>
    );
  });


  return (
    <div className={styles.LeaderBoard_container}>
      {leaders}
    </div>
  );
}

export default LeaderBoard;
