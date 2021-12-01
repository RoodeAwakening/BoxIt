//leaderboard
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allWorkoutsComplete } from "../../store/ranking";
import "./LeaderBoard.css";

export default function LeaderBoard() {
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
      <div className="leaderboard-each" key={index}>
        <div className="leaderboard-each-left">
          <div className="leaderboard-pos {index}" >
            <h2 id={`pos${pos}`}>{`#${pos}`}</h2>
          </div>
          <div>
            <img className="leaderboard-img" src={each.profile_photo} />
          </div>
        </div>
          <div className="leaderboard-name"><h3>{each.username}</h3></div>
          <div className="leaderboard-workouts"><h3>{each.workouts}</h3></div>
      </div>
    );
  });
  return <>{leaders}</>;
}
