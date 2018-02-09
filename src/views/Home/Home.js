import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <div>
        Hi!
      </div>
    );
  }
}

export default connect(() => ({

}), {

})(Home);
