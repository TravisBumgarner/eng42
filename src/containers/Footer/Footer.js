import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  FooterWrapper
} from "./Footer.styles";

export class Footer extends Component {

  render() {


    return (
      <FooterWrapper>
        My Footer
      </FooterWrapper>
    )

  }
}

export default connect((state) => ({
}), {

})(Footer);
