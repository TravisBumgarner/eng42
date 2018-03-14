import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SingleProjectWrapper,
} from './SingleProject.styles';

export class SingleProject extends Component {
  render() {
    const {
      project,
    } = this.props;

    return (
      <SingleProjectWrapper>
        { project.name }
      </SingleProjectWrapper>
    )
  }
}

export default connect((state) => ({
  project: state.project.all[state.project.selected],
}), {
})(SingleProject);
