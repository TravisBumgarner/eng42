import React, { Component } from 'react';

import { SITE_ROUTES } from "../../utilities/constants";

import {
  SiteLink,
  SiteLinkList,
  SiteLinkItem,
} from './Nav.styles';

export default class Nav extends Component {

  render() {

    return (
      <SiteLinkList>
        <SiteLinkItem><SiteLink to="/">Home</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink to="/about">About</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink to="/contact">Let's Chat</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink to="/portfolio">Portfolio</SiteLink></SiteLinkItem>
      </SiteLinkList>
    )
  }
}