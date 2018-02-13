import request from '../../../request/actions/apiRequest';

export const GET_PROJECTS_START = 'GET_PROJECTS_START';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export const getProjectsStart = () => ({
  type: GET_PROJECTS_START,
});

export const getProjectsSuccess = data => ({
  type: GET_PROJECTS_SUCCESS,
  data,
});

export const getProjectsFailure = error => ({
  type: GET_PROJECTS_FAILURE,
  error,
});

export const getProjects = () => (dispatch) => {
  dispatch(getProjectsStart());
  request('get', '/projects').then((response) => {
    console.log(response);
    const { data } = response;
    dispatch(getProjectsSuccess(data));
  }).catch((error) => {
    dispatch(getProjectsFailure(error));
  });
};
