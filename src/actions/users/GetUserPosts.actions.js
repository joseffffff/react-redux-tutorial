
import axios from 'axios';
import {GET_USER_POSTS_ATTEMPT, GET_USER_POSTS_FAILURE, GET_USER_POSTS_SUCCESS} from "./GetUserPostsTypes";

const getUserPostsAttempt = () => ({
  type: GET_USER_POSTS_ATTEMPT,
});

const getUserPostsSuccess = (payload) => ({
  type: GET_USER_POSTS_SUCCESS,
  payload: payload,
});

const getUserPostsFailure = (error) => ({
  type: GET_USER_POSTS_FAILURE,
  error: error,
})

export const getUserPosts = (userId) => (dispatch) => {
  dispatch(getUserPostsAttempt());
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => dispatch(getUserPostsSuccess(response.data)))
    .catch(error => dispatch(getUserPostsFailure(error.message)));
};