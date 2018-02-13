import toolsActions from '../../actions';

const all = (state = {}, action) => {
  switch (action.type) {
    case toolsActions.GET_TOOLS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default all;
