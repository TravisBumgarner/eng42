import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Home extends Component {

  render() {
    const {
      author
    } = this.props;

    return <h1>Travis Bumgarner</h1>
  }
}

export default connect((state) => ({
  author: state.author.all[0]
}), {

})(Home);
