import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';

import { loadSession } from '../../store/session/actions/loadSession';
import { clearNotification } from "../../store/notification/actions/clearNotification/clearNotification";

import Home from '../Home';
import About from '../About';
import LearnMore from '../LearnMore';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Project from '../Project';
import NotFound from '../NotFound';

import Header from '../../containers/Header';

import {
  TERTIARY_COLOR
} from "../../theme";

import {
  AppWrapper,
  LoadingWrapper,
} from './App.styles';

export class App extends Component {
  static propTypes = {
    loadSession: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadSession();
  }

  render() {
    const {
      loaded,
      notificationMsg,
      clearNotification,
    } = this.props;

    return loaded ? (
      <AppWrapper>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/:projectId" component={Project} />
          <Route exact path="/learn_more" component={LearnMore} />
          <Route component={NotFound} />
        </Switch>
        <Snackbar
          open={ !!notificationMsg.length }
          onRequestClose={ clearNotification }
          message={ notificationMsg }
        />
      </AppWrapper>

    ) : (
      <LoadingWrapper>
        <CircularProgress
          color={`${ TERTIARY_COLOR }`}
          size={120}
          thickness={7}
        />
      </LoadingWrapper>
    )
  }
}

export default withRouter(connect((state) => ({
  loaded: state.session.meta.loaded,
  notificationMsg: state.notification.msg,
}), {
  loadSession,
  clearNotification,
})(App));
