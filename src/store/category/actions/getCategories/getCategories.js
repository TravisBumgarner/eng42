import apiGet from '../../../request/actions/apiGet';

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

export const getCategories = () => {
  return (dispatch) => {
    dispatch(getCategoriesStart());
    return new Promise((resolve, reject) => {
      apiGet('/categories').then((response) => {
        const { data } = response;
        dispatch(getCategoriesSuccess(data));
        resolve();
      }).catch((error) => {
        dispatch(getCategoriesFailure(error));
        reject();
      });
    });
  };
};

