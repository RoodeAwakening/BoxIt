import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../store/groups";

import "./GroupsIndividual.css";
// import * as classes from "./GroupsIndividual.module.css"
// GroupsIndividual
//store
import { singleGroup } from "../../store/groups";
import { getComments } from "../../store/GroupComments";
import { userWorkouts } from "../../store/userWorkouts";
import { allWorkouts } from "../../store/workouts";
import { allWorkoutsComplete } from "../../store/ranking";
import { userGroups } from "../../store/userGroups";

export default function GroupsIndividual() {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => Object.values(state.ranking));
  // States
  const [groupData, setGroupData] = useState({});
  const [groupComments, setGroupComments] = useState([]);
  const [comment, setComment] = useState("");

  // From props.
  const { groupId } = useParams();

  useEffect(() => {
    async function fetchData() {
      await dispatch(allWorkoutsComplete());
      await dispatch(getComments(groupId));
      // get individual group data
      let response = await fetch(`/api/groups/${groupId}`);
      let data = await response.json();
      setGroupData(data);
    }
    fetchData();
  }, [groupId, dispatch]);

  //comment
  const updateComment = (e) => {
    setComment(e.target.value);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const userComment = await dispatch(createComment({ comment, groupId }));
    setComment("");
    dispatch(getComments(groupId));

    return userComment;
  };

  // get each comment
  const commentsData = [];
  for (const comment in comments) {
    commentsData.push(comments[comment]);
  }
  commentsData.reverse();

  // render the comments section
  return (
    <div className="comments_page-container">
      <div className="comments_page-container-join_leave">
        
        <button id="Group_leave">leave</button>
        <h2 id="Group_Name">{groupData.name}</h2>
        <button id="Group_join">Join</button>
      </div>
      <div className="comments-container">
        <h4 className="comments-each">
          {commentsData.map((each, index) => {
            return (
              <div key={index} className="comments-each-line">
                <img src={each?.comment?.user.profile_photo} />
                <h4 className="comments-each-line-username">
                  {each?.comment?.user.user_name}:{" "}
                </h4>
                <h4>{each?.comment?.content}</h4>
              </div>
            );
          })}
        </h4>

        {/* add a comment section */}
        <div className="comments_page-text-box">
          <form onSubmit={addComment}>
            <div>
              <input
                className="comments_page-text-box-input"
                name="comment"
                type="text"
                placeholder="comment"
                value={comment}
                onChange={updateComment}
              />
            </div>
            <button type="submit">Send</button>
    

       
          </form>
        </div>
        {/* add a comment section */}
      </div>
      {/* add under comment box */}
    </div>
  );
}
