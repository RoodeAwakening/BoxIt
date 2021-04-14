import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./GroupsIndividual.css";

//store
import { singleGroup } from "../../store/groups";

export default function GroupsIndividual() {
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState({});
  const [groupComments, setGroupComments] = useState([]);
  console.log("--groupComments----", groupComments);

  // From props.
  const { groupId } = useParams();

  useEffect(() => {
    async function fetchData() {
      // Get the individual Group
      const response = await fetch(`/api/groups/${groupId}`);
      const groupData = await response.json();
      // Get the individual Group Comments
      const response2 = await fetch(`/api/groups/${groupId}/comments`);
      const groupCommentsRes = await response2.json();

      setGroupData(groupData);
      setGroupComments(groupCommentsRes);
      // if (!groupCommentsRes) {
      //   setGroupComments(groupCommentsRes);
      // } else {
      //   setGroupComments(groupCommentsRes);
      // }
    }
    fetchData();
  }, [groupId, dispatch]);

  // get each comment

  let allComments = groupComments.map((comment) => {
    console.log("--comment--", comment);

    let indComment = [];
    indComment.push(comment);
    return indComment[0]?.comment;
  });

  return (
    <div className="comments_page-container">
      <h2 id="Group_Name">{groupData.name}</h2>
      <div className="comments-container">
        <h4 className="comments-each">
          {allComments.map((each, index) => {
            return (
              <div key={index}>
                <h4>{each.content}</h4>
              </div>
            );
          })}
        </h4>
      </div>
    </div>
  );
}
