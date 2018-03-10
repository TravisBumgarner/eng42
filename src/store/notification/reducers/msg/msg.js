import apiRequestActions from '../../../request/actions';

const all = (state = '', action) => {
  switch (action.type) {
    case apiRequestActions.API_POST_SUCCESS:
    case apiRequestActions.API_POST_FAILURE:
      console.log('action.detail', action.detail);
      return action.detail;
    default:
      return state;
  }
};

export default all;
