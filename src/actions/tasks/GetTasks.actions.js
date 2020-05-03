import axios from 'axios';
import {GET_TASK_ATTEMPT, GET_TASK_FAILURE, GET_TASK_SUCCESS} from "./Types";

const getTasksAttempt = () => ({
  type: GET_TASK_ATTEMPT,
});

const getTasksSuccess = (payload) => ({
  type: GET_TASK_SUCCESS,
  payload: payload,
});

const getTasksFailure = (error) => ({
  type: GET_TASK_FAILURE,
  error: error,
});

export const getTasks = () => (dispatch) => {
  dispatch(getTasksAttempt());
  return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return dispatch(getTasksSuccess(response.data));
    })
    .catch(err => {
      return dispatch(getTasksFailure(err.message));
    });
};
