import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import axios from 'axios'

import { Portfolio, NotFound, Header, SingleProject, Navigation } from './components'

import { AppWrapper, LoadingWrapper } from './App.styles'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [projects, setProjects] = useState({})
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        axios
            .request({
                method: 'GET',
                url: 'https://eng40api.travisbumgarner.com/projects'
            })
            .then(({ data }) => {
                setProjects(data)
                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
            })
    }
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

export default App
