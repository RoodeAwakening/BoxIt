import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./GroupsIndividual.css"

//store
import { singleGroup } from "../../store/groups";




export default function GroupsIndividual(){
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState({})
  const [groupComments, setGroupComments] = useState([])
// console.log('------',groupData);
console.log('------1',groupComments);
    // From props.
    const { groupId }  = useParams();

    useEffect( () => {
      async function fetchData(){
          // Get the individual Group
  const response = await fetch(`/api/groups/${groupId}`);
  const groupData = await response.json();
  // Get the individual Group Comments
  const response2 = await fetch(`/api/groups/${groupId}/comments`);
  const groupComments = await response2.json();
  setGroupData(groupData ) 
  setGroupComments(groupComments ) 
      }
      fetchData()
  }, [dispatch]);

  // get each comment
  let allComments = groupComments.map((comment)=> {
    
    let indComment = []
    indComment.push(comment)
    console.log('----',);
    return indComment[0]?.comment
  })






  return (
    <>
    <h2>{ groupData.name }</h2>
    <h2>{ allComments.map((each, index) =>{

      return (
        <div key={index}>

        <h2>{each.content}</h2>
        </div>
      )
    }) }</h2>

    
    </>
  )


}