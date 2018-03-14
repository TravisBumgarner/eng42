import projectActions from '../../actions';

const filtered = (state = [], action) => {
  switch (action.type) {
    case projectActions.SET_FILTERED_PROJECTS_SUCCESS:
      return action.projectIdList;
    default:
      return state;
  }
};

export default filtered;
