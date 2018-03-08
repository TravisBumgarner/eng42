import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ProjectTileWrapper
} from './ProjectTile.styles';

export class ProjectTile extends Component {
  render() {
    const {} = this.props;

    return (
      <ProjectTileWrapper>Hi</ProjectTileWrapper>
    )
  }
}

export default connect((state) => ({
}), {
})(ProjectTile);
