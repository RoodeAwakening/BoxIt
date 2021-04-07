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

  useEffect(() => {

    dispatch(allWorkoutsComplete());

  }, [dispatch]);

  // go through each compelted workout and give user ranks
  let pos = 0;
  let leaders = allWorkoutsCompleted.map((each) => {
    pos += 1;

    return (
      <div className="leaderboard-each" key={each.user_id}>
        <div className="leaderboard-pos">{`#${pos}`}</div>
        <div className="leaderboard-name">{each.username}</div>
        <div className="leaderboard-workouts">{each.workouts}</div>
      </div>
    );
  });
  return leaders;
}
