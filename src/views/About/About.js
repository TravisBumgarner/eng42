import React, { Component } from 'react';
import { connect } from 'react-redux';

export class About extends Component {

  render() {
    const {
      author: {name, link, description},
      loaded
    } = this.props;

    const aboutLinks = Object.values(link).map(l => <li><a href={l.src}>{l.name}</a></li>)

    return (
      <div>
        <h1>{ name }</h1>
        <p>{ description }</p>
        <ul>{ aboutLinks }</ul>
      </div>
    )

  }
}

export default connect((state) => ({
  author: state.author.me,
  loaded: state.session.meta.loaded,
}), {

})(About);
