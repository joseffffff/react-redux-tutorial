import {GET_TASK_ATTEMPT, GET_TASK_FAILURE, GET_TASK_SUCCESS} from "../actions/tasks/Types";

const INITIAL_STATE = {
  loading: false,
  tasks: [],
  error: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASK_ATTEMPT:
      return { ...state, loading: true };
    case GET_TASK_FAILURE:
      return { ...state, loading: false, error: action.error };
    case GET_TASK_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    default:
      return state;
  }
}

