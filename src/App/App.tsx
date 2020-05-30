import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import projects from 'Content'

import { Portfolio, NotFound, Header, SingleProject } from './components'
import { GlobalStyle } from 'Theme'

import { AppWrapper } from './App.styles'

class App extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        const sortedProjects = projects.sort((a, b) => {
            if (a.end_date === 'Ongoing') {
                return -1
            }
            if (b.end_date === 'Ongoing') {
                return 1
            }
            return Date.parse(b.end_date) - Date.parse(a.end_date)
        })
        return (
            <>
                <GlobalStyle />
                <AppWrapper>
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <Portfolio {...props} projects={sortedProjects} />}
                        />
                        <Route
                            path="/project/:id"
                            render={props => <SingleProject {...props} projects={sortedProjects} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </AppWrapper>
            </>
        )
    }
}

export default withRouter(App)
