import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import axios from 'axios'

import { Portfolio, NotFound, Header, SingleProject, Navigation } from './components'

import { AppWrapper, LoadingWrapper } from './App.styles'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            projects: {}
        }
    }

    fetchData = () => {
        axios
            .request({
                method: 'GET',
                url: 'https://eng40api.travisbumgarner.com/projects'
            })
            .then(({ data }) => this.setState({ projects: data, isLoading: false }))
            .catch(() => this.setState({ isLoading: false }))
    }

    componentWillMount() {
        this.fetchData()
    }

    render() {
        const { isLoading, projects } = this.state
        return isLoading ? (
            <LoadingWrapper>Loading</LoadingWrapper>
        ) : (
            <AppWrapper>
                <Header />
                <Navigation />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Portfolio {...props} projects={projects} />}
                    />
                    <Route
                        path="/:id"
                        render={props => <SingleProject {...props} projects={projects} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </AppWrapper>
        )
    }
}
