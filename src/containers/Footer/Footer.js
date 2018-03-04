import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Footer extends Component {

  render() {


    return (
      <div>
        My Footer
      </div>
    )

  }
}

export default connect((state) => ({
}), {

})(Footer);
