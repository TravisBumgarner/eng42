import React, { Component } from 'react'

import { Nav } from './components'

import { HeaderWrapper } from './Header.styles'

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1>Travis Bumgarner</h1>
                <Nav />
            </HeaderWrapper>
        )
    }
}
