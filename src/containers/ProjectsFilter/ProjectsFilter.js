import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from 'material-ui/MenuItem';

import projectActions from '../../store/project/actions';


import {
  ProjectsFilterWrapper,
  AlignToDropdown,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  FilterIcon,
} from "./ProjectsFilter.styles";

export class ProjectsFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedSkill: 0,
    }
  }

  handleCategoryChange = (event, index, value) => {
    this.setState({
      selectedCategory: value,
      selectedSkill: 0,
    });
    this.updateFilteredProjects(0, value);
  };

  handleSkillChange = (event, index, value) => {
    console.log(event, index, value);
    this.setState({
      selectedSkill: value,
      selectedCategory: 0
    });
    this.updateFilteredProjects(value, 0);
  };

  updateFilteredProjects = (selectedSkill, selectedCategory) => {
    const {
      projects,
      setFilteredProjects,
      categories,
      skills,
    } = this.props;

    const filteredProjectIds = Object.values(projects).filter(p => {
      const isInCategory = selectedCategory !== 0 ? p.category.includes(selectedCategory) : true;
      const isInSkill = selectedSkill !== 0 ? p.skill.includes(selectedSkill) : true;
      return (isInCategory && isInSkill);
    }).map(p => p.id);

    setFilteredProjects(filteredProjectIds);
  }

  render() {
    const {
      projects,
      project,
      loaded,
      skills,
      categories,
    } = this.props;

    const CategoryItems = Object.values(categories).map(c => {
      return <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
    });

    const CategoryDropdown = (
      <CategoryDropdownMenu autoWidth={false} value={this.state.selectedCategory} onChange={this.handleCategoryChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Category'}/>
        {CategoryItems}
      </CategoryDropdownMenu>
    );

    // TODO could be helpful to have Skill (Count) on the dropdown
    const SkillsItems = Object.values(skills).map(s => {
      return <MenuItem value={s.id} key={s.id} primaryText={s.name}/>
    });

    const SkillsDropdown = (
      <SkillDropdownMenu autoWidth={false} value={this.state.selectedSkill} onChange={this.handleSkillChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Skill'}/>
        {SkillsItems}
      </SkillDropdownMenu>
    );

    return (
      <ProjectsFilterWrapper>
        <FilterIcon /> {CategoryDropdown} <AlignToDropdown>Or</AlignToDropdown> {SkillsDropdown}
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

