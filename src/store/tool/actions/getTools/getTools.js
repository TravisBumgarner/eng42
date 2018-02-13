import request from '../../../request/actions/apiRequest';

export const GET_TOOLS_START = 'GET_TOOLS_START';
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS';
export const GET_TOOLS_FAILURE = 'GET_TOOLS_FAILURE';

export const getToolsStart = () => ({
  type: GET_TOOLS_START,
});

export const getToolsSuccess = data => ({
  type: GET_TOOLS_SUCCESS,
  data,
});

export const getToolsFailure = error => ({
  type: GET_TOOLS_FAILURE,
  error,
});

export const getTools = () => {
  return (dispatch) => {
    dispatch(getToolsStart());
    return new Promise((resolve, reject) => {
      request('get', '/tools').then((response) => {
        const { data } = response;
        dispatch(getToolsSuccess(data));
        resolve();
      }).catch((error) => {
        dispatch(getToolsFailure(error));
        reject();
      });
    });
  };
};
