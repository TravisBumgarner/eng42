import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Project extends Component {

  render() {
    const {
      project,
    } = this.props;
    return (
      <div>
        {project && project.name}
      </div>
    )

  }
}

export default connect((state, ownProps) => ({
  project: state.project.all[ownProps.match.params.projectId],
  loaded: state.session.meta.loaded,
}), {

})(Project);
