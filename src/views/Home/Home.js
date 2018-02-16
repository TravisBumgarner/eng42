import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Home extends Component {

  render() {
    const {
      author,
      loaded
    } = this.props;

    console.log(author);

    return <h1>{ author.name } </h1>
  }
}

export default connect((state) => ({
  author: state.author.all,
  loaded: state.session.meta.loaded,
}), {

})(Home);
