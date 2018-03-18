import * as getProjects from './getProjects';
import * as setSelectedProject from './setSelectedProject';
import * as setFilteredProjects from './setFilteredProjects';

export default {
  ...getProjects,
  ...setSelectedProject,
  ...setFilteredProjects,
};
