import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Introduction } from './components'

import { HomeWrapper } from './Home.styles'

const Home = () => {
    return (
        <HomeWrapper>
            <Introduction />
        </HomeWrapper>
    )
}

export default connect(
    state => ({}),
    {}
)(Home)
