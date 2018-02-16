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

  componentWillMount() {
    this.props.loadSession();
  }

  render() {
    const { loaded } = this.props;

    return loaded ? (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default withRouter(connect((state) => ({
  loaded: state.session.meta.loaded,
}), {
  loadSession,
})(App));
