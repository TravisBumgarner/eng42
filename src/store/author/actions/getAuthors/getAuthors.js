import request from '../../../request/actions/apiRequest';

export const GET_AUTHORS_START = 'GET_AUTHORS_START';
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS';
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';

export const getAuthorsStart = () => ({
  type: GET_AUTHORS_START,
});

export const getAuthorsSuccess = data => ({
  type: GET_AUTHORS_SUCCESS,
  data,
});

export const getAuthorsFailure = error => ({
  type: GET_AUTHORS_FAILURE,
  error,
});

export const getAuthors = () => {
  return (dispatch) => {
    dispatch(getAuthorsStart());
    return new Promise((resolve, reject) => {
      request('get', '/authors').then((response) => {
        const { data } = response;
        dispatch(getAuthorsSuccess(data));
        resolve();
      }).catch((error) => {
        dispatch(getAuthorsFailure(error));
        reject();
      });
    });
  };
};
