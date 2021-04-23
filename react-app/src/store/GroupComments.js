const GET_ALL_COMMENTS = "getAllComments";



////////////////ACTION////////////////////
const groupCommentData = (commentData, userData) => {
  return {
    type: GET_ALL_COMMENTS,
    commentData,
    userData,
  };
};
////////////////ACTION////////////////////

////////////////THUNK ACTION CREATOR////////////////////
export const getComments = (groupId) => async (dispatch) => {
  // Get the individual Group Comments
  const response1 = await fetch(`/api/groups/${groupId}/comments`);
  const commentData = await response1.json();




  dispatch(groupCommentData(commentData))
}

////////////////THUNK ACTION CREATOR////////////////////





////////////////REDUCER////////////////////
const initialState = {};
export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        ...action.commentData,
      };
 


    default:
      return state;
  }
}