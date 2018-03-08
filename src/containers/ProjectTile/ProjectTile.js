import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '../../components/Divider';

import {
  ProjectTileWrapper,
  ProjectTitle,
  ProjectSubheader,
  ProjectText,
} from './ProjectTile.styles';

export class ProjectTile extends Component {
  render() {
    const {
      project,
      skills,
      categories,
    } = this.props;

    // const projectCategories = project.category.map(c => {
    //   return <li key={c}>{categories[c].name}</li>
    // });

    const projectCategories = project.category.map(c => categories[c].name).join(", ");

    // const projectSkills = project.skill.map(s => {
    //   return <li key={s}>{skills[parseInt(s,10)].name}</li>
    // });

        const projectSkills = project.skill.map(s => skills[s].name).join(", ");


    return (
      <ProjectTileWrapper>

        <ProjectTitle>
          { project.name }
        </ProjectTitle>

        <Divider primary />

        <ProjectSubheader>Skills</ProjectSubheader>
        <ProjectText>{projectSkills}</ProjectText>

        <ProjectSubheader>Categories</ProjectSubheader>
        <ProjectText>{projectCategories}</ProjectText>

        <ProjectSubheader>Links</ProjectSubheader>
        <ProjectText></ProjectText>

      </ProjectTileWrapper>
    )
  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.projectId],
  skills: state.skill.all,
  categories: state.category.all,
}), {
})(ProjectTile);


// "id"
// 1
// :
// "name"
// 2
// :
// "category"
// 3
// :
// "start_date"
// 4
// :
// "end_date"
// 5
// :
// "skill"
// 6
// :
// "link"