import { getCategories } from '../../../category/actions/getCategories';
import { getSkills } from '../../../skill/actions/getSkills';
import { getProjects } from '../../../project/actions/getProjects';

export const LOAD_SESSION_START = 'LOAD_SESSION_START';
export const LOAD_SESSION_SUCCESS = 'LOAD_SESSION_SUCCESS';
export const LOAD_SESSION_FAILURE = 'LOAD_SESSION_FAILURE';

export const loadSessionStart = () => ({
  type: LOAD_SESSION_START,
});

export const loadSessionSuccess = () => ({
  type: LOAD_SESSION_SUCCESS,
});

export const loadSessionFailure = error => ({
  type: LOAD_SESSION_FAILURE,
  error,
});

export const loadSession = () => { //eslint-disable-line
  return (dispatch) => {
    dispatch(loadSessionStart());
    return new Promise((resolve, reject) => {
      return Promise.all([
        dispatch(getCategories()),
        dispatch(getSkills()),
        dispatch(getProjects()),
      ]).then(() => {
        dispatch(loadSessionSuccess());
        resolve();
      }).catch((error) => {
        dispatch(loadSessionFailure(error));
        reject();
      });
    });
  };
};
