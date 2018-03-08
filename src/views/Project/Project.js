import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Project extends Component {

  render() {
    const {
      project,
      loaded
    } = this.props;
    console.log(this.props.match.params.projectId);
    // console.log(project);
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
