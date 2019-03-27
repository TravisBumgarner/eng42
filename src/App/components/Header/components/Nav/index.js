import React, { Component } from 'react';

import {
  SiteLink,
  SiteLinkList,
  SiteLinkItem,
  activeSiteLink,
} from './Nav.styles';

export default class Nav extends Component {
  render() {

    return (
      <SiteLinkList>
        <SiteLinkItem><SiteLink exact activeStyle={activeSiteLink} to="/">Home</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink activeStyle={activeSiteLink} to="/portfolio">Portfolio</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink activeStyle={activeSiteLink} to="/about">About</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink activeStyle={activeSiteLink} to="/contact">Contact</SiteLink></SiteLinkItem>
        <SiteLinkItem><SiteLink activeStyle={activeSiteLink} to="/learn_more">More</SiteLink></SiteLinkItem>
      </SiteLinkList>
    )
  }
}

