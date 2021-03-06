const GET_ALL_GROUPS = "getAllGroups";
const GET_SINGLE_GROUP = "getSingleGroups";

////////////////ACTION////////////////////
const allGroupsData = (allGroupsRes) => {
  return {
    type: GET_ALL_GROUPS,
    allGroupsRes,
  };
};


////////////////ACTION////////////////////


//Thunk Action Creator
export const getAllGroups = () => async (dispatch) => {
  const response = await fetch("api/groups/");
  const allGroupsRes = await response.json();

  dispatch(allGroupsData(allGroupsRes));
  return allGroupsRes;
};

// add a new group
export const createGroup = (groupName) => async (dispatch) => {
  const { name } = groupName;

  const response = await fetch("/api/groups/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      groupName: groupName.groupName,
    }),
  });
  const newGroupName = await response.json();
  //  return newGroupName
  // add the new group to the users groups
  const response2 = await fetch("/api/groups/user_group", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      addGroup: newGroupName.id,
    }),
  });
  const addedGroup = await response2.json();
};

// add comment to given group
export const createComment = commentObject => async dispatch =>{
  const {comment, groupId} = commentObject
  const response = await fetch(`/api/groups/${groupId}/comments`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content:comment

    })
  })
  const data = await response.json()
 return data
}



//Reducer
const initialState = {};
export default function groupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GROUPS:
      return {
        ...state,
        ...action.allGroupsRes.groups,
      };


    default:
      return state;
  }
}
