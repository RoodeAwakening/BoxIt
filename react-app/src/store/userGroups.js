const GET_ALL_USER_GROUPS = "getAllUserGroups";

//ACTION
const allUserGroups = (allUserGroupsData) => {
  return {
    type: GET_ALL_USER_GROUPS,
    allUserGroupsData,
  };
};

//Thunk Action Creator
//get all user groups
export const userGroups = () => async (dispatch) => {
  const response = await fetch("/api/groups/user_group");
  const groups = await response.json();

  dispatch(allUserGroups(groups));

  return groups;
};

// remove from user group
export const removeUserGroup = (groupid) => async (dispatch) => {


  const response = await fetch(`/api/groups/user_group/${groupid}`,{
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
  const data = await response.json()
  return data
}

//Reducer
const initialState = {};
export default function userGroupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_GROUPS:

      return {
        ...state,
        ...action.allUserGroupsData.user_groups,
      };

    default:
      return state;
  }
}
