import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav'

import {
  HeaderWrapper
} from "./Header.styles";

export class Footer extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Nav />
      </HeaderWrapper>
    )
  }
}

export default connect((state) => ({
}), {

})(Footer);
