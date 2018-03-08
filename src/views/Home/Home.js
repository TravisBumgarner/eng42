import React, { Component } from 'react';
import { connect } from 'react-redux';

import Introduction from '../../containers/Introduction';

import {
  HomeWrapper,
} from './Home.styles'

export class Home extends Component {
  render() {

    return (
      <HomeWrapper>
        <Introduction />
      </HomeWrapper>
    )

  }
}

export default connect((state) => ({

}), {

})(Home);
