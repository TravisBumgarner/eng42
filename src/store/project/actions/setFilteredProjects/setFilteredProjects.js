export const SET_FILTERED_PROJECTS_SUCCESS = 'SET_FILTERED_PROJECTS_SUCCESS';

export const setFilteredProjectsSuccess = projectIdList => ({
  type: SET_FILTERED_PROJECTS_SUCCESS,
  projectIdList,
});

export const setFilteredProjects = (projectIdList) => {
  return (dispatch) => {
    dispatch(setFilteredProjectsSuccess(projectIdList));
  };
};
