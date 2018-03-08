import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import ProjectTile from '../../containers/ProjectTile';
import Button from '../../components/Button';

import {
  PortfolioWrapper,
  ProjectsWrapper,
} from './Portfolio.styles';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedSkill: 0,
    }
  }

  handleCategoryChange = (event, index, value) => this.setState({selectedCategory: value});
  handleSkillChange = (event, index, value) => this.setState({selectedSkill: value});

  render() {
    const {
      projects,
      loaded,
      skills,
      categories,
    } = this.props;

    const {
      selectedCategory,
      selectedSkill,
    } = this.state;

    const CategoryItems = Object.values(categories).map(c => {
      return <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
    });

    const CategoryDropdown = (
      <DropDownMenu value={this.state.selectedCategory} onChange={this.handleCategoryChange}>
        {CategoryItems}
      </DropDownMenu>
    );

    // TODO could be helpful to have Skill (Count) on the dropdown
    const SkillsItems = Object.values(skills).map(c => {
      return <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
    });

    const SkillsDropdown = (
      <DropDownMenu value={this.state.selectedSkill} onChange={this.handleSkillChange}>
        {SkillsItems}
      </DropDownMenu>
    );

    const selectedProjects = Object.values(projects).filter(p => {
      console.log(p.category, selectedCategory, p.category.includes(selectedCategory))
      return (p.category.includes(selectedCategory) && p.skill.includes(selectedSkill));
    }).map(p => {
      return <ProjectTile key={p.id} projectId={p.id} />;
    });

    return (
      <PortfolioWrapper>
        {CategoryDropdown}
        {SkillsDropdown}
        <ProjectsWrapper>
          {selectedProjects}
        </ProjectsWrapper>
      </PortfolioWrapper>
    )
  }
}

export default connect((state) => ({
  projects: state.project.all,
  categories: state.category.all,
  skills: state.skill.all,
}), {

})(Portfolio);
