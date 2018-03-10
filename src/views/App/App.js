import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';

import { loadSession } from '../../store/session/actions/loadSession';

import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Project from '../Project';

import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

import {
  AppWrapper
} from './App.styles';

export class App extends Component {
  static propTypes = {
    loadSession: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadSession();
  }

  toggleNotification = () => {
    // this.setState({isNotification: !this.state.isNotification});
    alert('toogglgging');
  };

  render() {
    const {
      loaded,
      location: { pathname },
      notificationMsg,
    } = this.props;

    // const showHeader = pathname !== '/';
    // const showFooter = pathname !== '/';
    const showHeader = true; const showFooter = true;

    return loaded ? (
      <AppWrapper>
        { showHeader && <Header /> }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/project/:projectId" component={Project} />
        </Switch>
        { showFooter && <Footer /> }
        <Snackbar open={ true } onRequestClose={ this.toggleNotification } message={ notificationMsg }/>

      </AppWrapper>

    ) : (
      <div>Loading...!</div>
    )
  }
}

export default withRouter(connect((state) => ({
  loaded: state.session.meta.loaded,
  notificationMsg: state.notification.msg,
}), {
  loadSession,
})(App));
