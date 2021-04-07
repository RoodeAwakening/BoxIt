//leaderboard
import React from "react";
import { useSelector } from "react-redux";

import "./LeaderBoard.css"


export default function LeaderBoard() {
  const allWorkoutsCompleted = useSelector((state) =>
    Object.values(state.ranking)
  );




  let pos = 0;
  let leaders = allWorkoutsCompleted.map((each) => {
    pos += 1;
  
    return (
      <div className="leaderboard-each" key={each.user_id}>
        <div className="leaderboard-pos">{`#${pos}`}</div>
        <div className="leaderboard-name">
          {each.username}
        </div>
        <div className="leaderboard-workouts">
          {each.workouts}
        </div>
      </div>
    );
  });
  return leaders;
}
