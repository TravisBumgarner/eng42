import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Me } from './components';

import { AboutWrapper } from './About.styles';

export class About extends Component {

  render() {

    return (
      <AboutWrapper>
        <Me />
      </AboutWrapper>
    )

  }
}

export default connect((state) => ({

}), {

})(About);
