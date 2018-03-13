import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Nav from '../../components/Nav'

import { SITE_ROUTES } from "../../utilities/constants";

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
