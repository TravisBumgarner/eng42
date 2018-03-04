import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { SITE_ROUTES } from "../../utilities/constants";

export class Footer extends Component {

  render() {

    return (
      <div>
        My Header
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </div>
    )

  }
}

export default connect((state) => ({
}), {

})(Footer);
