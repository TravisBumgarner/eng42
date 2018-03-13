import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from 'material-ui/MenuItem';

import ProjectTile from '../../containers/ProjectTile';

import {
  AlignToDropdown,
  FilterIcon,
  ProjectsWrapper,
  FilterWrapper,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  PortfolioWrapper,
  SingleProjectWrapper,
  ScrollingCardRight,
  ScrollingCardLeft,
} from './Portfolio.styles';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedSkill: 0,
      isProjectOpen: false,
    }
  }

  handleCategoryChange = (event, index, value) => this.setState({
    selectedCategory: value,
    selectedSkill: 0,
  });

  handleSkillChange = (event, index, value) => this.setState({
    selectedSkill: value,
    selectedCategory: 0
  });

  openProject = () => {
    this.setState({ isProjectOpen: !this.state.isProjectOpen });
    console.log('open project');
  };

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
      isProjectOpen,
    } = this.state;

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

    const selectedProjects = Object.values(projects).filter(p => {
      const isInCategory = selectedCategory !== 0 ? p.category.includes(selectedCategory) : true;
      const isInSkill = selectedSkill !== 0 ? p.skill.includes(selectedSkill) : true;
      return (isInCategory && isInSkill)
    }).map(p => {
      return <ProjectTile key={p.id} projectId={p.id} />;
    });

    return (
      <PortfolioWrapper>
        <button onClick={ this.openProject } />

        <ScrollingCardLeft title="Portfolio" isProjectOpen={ isProjectOpen }>
          <FilterWrapper>
            <FilterIcon /> {CategoryDropdown} <AlignToDropdown>Or</AlignToDropdown> {SkillsDropdown}
          </FilterWrapper>
          <ProjectsWrapper>
            {selectedProjects}
          </ProjectsWrapper>
        </ScrollingCardLeft>

        <ScrollingCardRight title="Portfolio" isProjectOpen={ isProjectOpen }>
          <p> SOME CONTENT!</p>
        </ScrollingCardRight>
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
