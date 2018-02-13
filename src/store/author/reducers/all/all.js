import authorActions from '../../actions';

const all = (state = {}, action) => {
  switch (action.type) {
    case authorActions.GET_AUTHOR_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default all;
