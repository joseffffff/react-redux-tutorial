import axios from "axios";

import { GET_USERS_ATTEMPT, GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./GetUsersTypes";

const getUserAttempt = () => ({
  type: GET_USERS_ATTEMPT,
});

const getUserSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload: payload,
});

const getUserFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  error: payload,
});

export const getUsers = () => async (dispatch) => {
  dispatch(getUserAttempt());
  await sleep(1000);
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return dispatch(getUserSuccess(response.data));
    })
    .catch(err => {
      return dispatch(getUserFailure(err.message));
    })
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}