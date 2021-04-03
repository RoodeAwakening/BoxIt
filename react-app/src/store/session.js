const SET_USER = 'setUser'
const REMOVE_USER = 'removeUser'

const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  }
}

const removeUser = () => {
  return{ 
    type: REMOVE_USER
  }
}


export const signup = user => async dispatch => {
  let {first_name, last_name, DOB, user_name, profile_photo, boxing_level ,email, password} = user
  // fetch to image route to get image url
  const formData = new FormData()
  formData.append('image', profile_photo)
  const responseImageUrl = await fetch('/api/images/',{
    method: 'POST',
    body: formData,
  })
  const photoData = await responseImageUrl.json()
  profile_photo = photoData.url
  
  
  // signup the user
  const response = await fetch('/api/auth/signup',{
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    first_name,
    last_name,
    DOB,
    user_name,
    profile_photo,
    boxing_level,
    email,
    password, 
  })
})
const data = await response.json()
dispatch(setUser(data.user))
return response
}



export const restoreUser = () => async dispactch => {
  const response = await fetch('/api/auth/')

  const data = await response.json()

  dispactch(setUser(data))
  return response
}


export const loginThunk = user => async dispatch => {
  const {email, password} = user
  const response = await fetch('/api/auth/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  
  const data = await response.json()
  dispatch(setUser(data))

  return data
}

export const logoutThunk = user => async dispatch => {
  const response = await fetch('/api/auth/logout',{
    method:'DELETE',
  })
  dispatch(removeUser())
  return response
}

// session reducer that will hold the current session user's information.
export default function sessionReducer(state = { user: null }, action) {
	let newState
	switch (action.type) {
		case SET_USER:
			newState = Object.assign({}, state)
			newState.user = action.payload
			return newState
		case REMOVE_USER:
			newState = Object.assign({}, state)
			newState.user = null
			return newState
		default:
			return state
	}
}
