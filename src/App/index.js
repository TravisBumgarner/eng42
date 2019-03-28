import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

import { loadSession } from '../store/session/actions/loadSession'

import { Portfolio, NotFound, Header, SingleProject, Navigation } from './components'

import { AppWrapper, LoadingWrapper, ErrorMsg } from './App.styles'

export class App extends Component {
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
                <Navigation />
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/" component={Portfolio} />
                    <Route path="/:id" component={SingleProject} />
                    <Route component={NotFound} />
                </Switch>
            </AppWrapper>
        ) : (
            <LoadingWrapper>
                {shouldErrorMsg ? (
                    <ErrorMsg>
                        <FaThumbsDown />
                        <FaThumbsDown /> Sorry there was an error. Please reload or try again later.
                    </ErrorMsg>
                ) : (
                    <div>Loading</div>
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
