import request from '../../../request/actions/apiRequest';

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const getCategoriesStart = () => ({
  type: GET_CATEGORIES_START,
});

export const getCategoriesSuccess = data => ({
  type: GET_CATEGORIES_SUCCESS,
  data,
});

export const getCategoriesFailure = error => ({
  type: GET_CATEGORIES_FAILURE,
  error,
});

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesStart());
  request('get', '/categories').then((response) => {
    console.log(response);
    const { data } = response;
    dispatch(getCategoriesSuccess(data));
  }).catch((error) => {
    dispatch(getCategoriesFailure(error));
  });
};
