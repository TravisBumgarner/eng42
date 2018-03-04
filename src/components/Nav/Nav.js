import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { SITE_ROUTES } from "../../utilities/constants";

export default class Nav extends Component {

  render() {

    return [
      <li><Link to="/">Home</Link></li>,
      <li><Link to="/about">About</Link></li>,
      <li><Link to="/contact">Contact</Link></li>,
      <li><Link to="/portfolio">Portfolio</Link></li>,
    ]
  }
}