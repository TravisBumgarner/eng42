export const SET_SELECTED_PROJECT_SUCCESS = 'SET_SELECTED_PROJECT_SUCCESS';

export const setSelectedProjectSuccess = projectId => ({
  type: SET_SELECTED_PROJECT_SUCCESS,
  projectId,
});

export const setSelectedProject = (projectId) => {
  return (dispatch) => {
    dispatch(setSelectedProjectSuccess(projectId));
  };
};
