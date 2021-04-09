const GET_ALL_GROUPS = "getAllGroups";

//ACTION
const allGroupsData = (allGroupsRes) => {
  return {
    type: GET_ALL_GROUPS,
    allGroupsRes,
  };
};

//Thunk Action Creator
export const getAllGroups = () => async (dispatch) => {
  const response = await fetch("api/groups/");
  const allGroupsRes = await response.json();


  dispatch(allGroupsData(allGroupsRes));
  return allGroupsRes;
};

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
