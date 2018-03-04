import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Portfolio extends Component {

  render() {
    const {
      projects,
      loaded
    } = this.props;
    const projectPreviews = Object.values(projects).map(p => {
      const categories = p.category.map(c => <li>{c}</li>);

      return (<div>
        <h2>{p.name}</h2>
          <ul>{categories}</ul>
          <p>{p.start_date}</p>
      </div>)
    });

    return (
      <div>
        {projectPreviews}
      </div>
    )

  }
}

export default connect((state) => ({
  projects: state.project.all,
  loaded: state.session.meta.loaded,
}), {

})(Portfolio);
