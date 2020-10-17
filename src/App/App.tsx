import React from 'react'
import { Switch, Route } from 'react-router-dom'

import projects from 'Content'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject, Footer } from './components'
import { GlobalStyle } from 'Theme'

import styled from 'styled-components'

const AppWrapper = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 15px auto 30px;
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
                <Footer />
            </AppWrapper>
        </>
    )
}

export default App
