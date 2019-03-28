import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

import { loadSession } from '../store/session/actions/loadSession'

import { Home, LearnMore, Portfolio, NotFound, Header, SingleProject } from './components'

import { TERTIARY_COLOR } from 'Theme'

import { AppWrapper, LoadingWrapper, Popup, ErrorMsg } from './App.styles'

export class App extends Component {
    static propTypes = {
        loadSession: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            shouldErrorMsg: false
        }
    }

    componentWillMount() {
        // Load error message if page hasn't finished loading in 10 seconds.
        setTimeout(
            function() {
                this.setState({ shouldErrorMsg: true })
            }.bind(this),
            10000
        )
        this.props.loadSession()
    }

    render() {
        const { loaded, notificationMsg } = this.props

        const { shouldErrorMsg } = this.state
        return loaded ? (
            <AppWrapper>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route path="/portfolio/:id" component={SingleProject} />
                    <Route exact path="/learn_more" component={LearnMore} />
                    <Route component={NotFound} />
                </Switch>
                <Popup open={!!notificationMsg.length} message={notificationMsg} />
            </AppWrapper>
        ) : (
            <LoadingWrapper>
                {shouldErrorMsg ? (
                    <ErrorMsg>
                        <FaThumbsDown />
                        <FaThumbsDown /> Sorry there was an error. Please reload or try again later.
                    </ErrorMsg>
                ) : (
                    <CircularProgress color={`${TERTIARY_COLOR}`} size={120} thickness={7} />
                )}
            </LoadingWrapper>
        )
    }
}

export default withRouter(
    connect(
        state => ({
            loaded: state.session.meta.loaded,
            notificationMsg: state.notification.msg
        }),
        {
            loadSession
        }
    )(App)
)
