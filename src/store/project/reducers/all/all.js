import projectActions from '../../actions';

const all = (state = {}, action) => {
  switch (action.type) {
    case projectActions.GET_PROJECTS_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default all;
