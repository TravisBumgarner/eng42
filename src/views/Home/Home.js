import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROUTES } from "../../utilities/constants";

import {
  RoutesList,
  ListItem,
  ItemLink,
  HomeWrapper,
  FirstName,
  LastName,
  ContentWrapper,
  MyPortrait,
  NameImgWrapper,
} from './Home.styles';

export class Home extends Component {
  render() {

    const routes = ROUTES.map(r => {
      return (
        <ListItem>
          <ItemLink to={r.src}>{ r.name }</ItemLink>
        </ListItem>
      );
    });

    return (
      <HomeWrapper>
        <ContentWrapper>
          <NameImgWrapper>
            <MyPortrait src = 'http://localhost:8000/media/me.png' />
            <FirstName>
              Travis
            </FirstName>
            <LastName>
              Bumgarner
            </LastName>
          </NameImgWrapper>
          <RoutesList>
            {routes}
          </RoutesList>
        </ContentWrapper>
      </HomeWrapper>
    )

  }
}

export default connect((state) => ({

}), {

})(Home);
