import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import projects from 'Content'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject } from './components'
import { GlobalStyle } from 'Theme'

import styled from 'styled-components'

const AppWrapper = styled.div`
    max-width: 1200px;
    margin: 15px auto 30px;
    width: 100vw;
    box-sizing: border-box;
`

const App = () => {
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
            <ScrollToTop />
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

export default withRouter(App)
