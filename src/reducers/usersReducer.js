import { GET_USERS_ATTEMPT, GET_USERS_FAILURE, GET_USERS_SUCCESS } from "../actions/users/GetUsersTypes";
import {GET_USER_POSTS_SUCCESS} from "../actions/users/GetUserPostsTypes";

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_ATTEMPT:
      return {...state, loading: true};
    case GET_USERS_SUCCESS:
      return {...state, users: action.payload, loading: false};
    case GET_USERS_FAILURE:
      return {...state, error: action.error, loading: false};
    case GET_USER_POSTS_SUCCESS:
      state.users.find(user => user.id === action.payload[0].userId).posts = action.payload;
      return {...state, loading: false};
    default:
      return state;
  }
};