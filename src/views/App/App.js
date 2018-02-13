import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loadSession } from '../../store/session/actions/loadSession';

import Home from '../Home';

export class App extends Component {
  static propTypes = {
    loadSession: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('hi');
    this.props.loadSession();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(() => ({
}), {
  loadSession,
})(App));
