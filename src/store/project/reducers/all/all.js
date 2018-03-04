import projectActions from '../../actions';

const all = (state = [], action) => {
  switch (action.type) {
    case projectActions.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default all;
