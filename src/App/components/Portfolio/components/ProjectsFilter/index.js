import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from 'material-ui/MenuItem';

import projectActions from '../../store/project/actions';

const sort = (sortMethod, a, b) => {
  if (sortMethod === 'newToOld'){
    return Date.parse(b.end_date) - Date.parse(a.end_date);
  } else if(sortMethod === 'oldToNew') {
    return Date.parse(a.end_date) - Date.parse(b.end_date);
  }
};

import {
  ProjectsFilterWrapper,
  AlignToDropdown,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  FilterIcon,
  SortDropdownMenu,
  SortIcon,
  Row,
} from "./ProjectsFilter.styles";

export class ProjectsFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedSkill: 0,
      sortMethod: 'newToOld',
    }
  }
  componentWillMount(){
    this.updateFilteredProjects()
  }

  componentDidUpdate(){
    this.updateFilteredProjects()
  }

  handleCategoryChange = (event, index, value) => {
    this.setState({
      selectedCategory: value,
      selectedSkill: 0,
    });
  };

  handleSkillChange = (event, index, value) => {
    this.setState({
      selectedSkill: value,
      selectedCategory: 0
    });
  };

  handleSortChange = (event, index, value) => {
    this.setState({ sortMethod: value });
  };

  updateFilteredProjects = () => {
    const {
      projects,
      setFilteredProjects,
    } = this.props;

    const {
      selectedSkill,
      selectedCategory,
      sortMethod,
    } = this.state;

    const filteredProjects = Object.values(projects).filter(p => {
      const isInCategory = selectedCategory !== 0 ? p.category.includes(selectedCategory) : true;
      const isInSkill = selectedSkill !== 0 ? p.skill.includes(selectedSkill) : true;
      return (isInCategory && isInSkill);
    });

    const sortedProjects = Object.values(filteredProjects).sort((a,b) => {
      return sort(sortMethod, a, b);
    });

    const projectIds = sortedProjects.map(p => p.id);

    setFilteredProjects(projectIds);
  };

  render() {
    const {
      skills,
      categories,
    } = this.props;

    const CategoryItems = Object.values(categories).sort((a,b)=>{ return a.name.localeCompare(b.name) }).map(c => {
      return <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
    });

    const SkillsItems = Object.values(skills).sort((a,b)=>{ return a.name.localeCompare(b.name) }).map(s => {
      return <MenuItem value={s.id} key={s.id} primaryText={s.name}/>
    });

    const SkillsDropdown = (
      <SkillDropdownMenu autoWidth={false} value={this.state.selectedSkill} onChange={this.handleSkillChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Skill'}/>
        {SkillsItems}
      </SkillDropdownMenu>
    );

    const CategoryDropdown = (
      <CategoryDropdownMenu autoWidth={false} value={this.state.selectedCategory} onChange={this.handleCategoryChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Category'}/>
        {CategoryItems}
      </CategoryDropdownMenu>
    );

    const SortDropdown = (
      <SortDropdownMenu autoWidth={false} value={this.state.sortMethod} onChange={this.handleSortChange}>
        <MenuItem value={'newToOld'} key={0} primaryText={'New to Old'}/>
        <MenuItem value={'oldToNew'} key={1} primaryText={'Old to New'}/>
      </SortDropdownMenu>
    );

    return (
      <ProjectsFilterWrapper>
        <Row>
          <SortIcon /> {SortDropdown}
        </Row>
        <Row>
          <FilterIcon /> {CategoryDropdown} <AlignToDropdown>Or</AlignToDropdown> {SkillsDropdown}
        </Row>
      </ProjectsFilterWrapper>
    )
  }
}

export default connect((state) => ({
  projects: state.project.all,
  project: state.project.all[state.project.selected],
  categories: state.category.all,
  skills: state.skill.all,
}), {
  setFilteredProjects: projectActions.setFilteredProjects,
})(ProjectsFilter);

