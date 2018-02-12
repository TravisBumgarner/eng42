import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../Home';

export class App extends Component {
  static propTypes = {
    apiRequest: PropTypes.func.isRequired,
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
})(App));
