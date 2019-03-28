import React, { Component } from 'react'
import styled from 'styled-components'

import { Nav } from './components'

const PRIMARY_COLOR = '#000000'
const SECONDARY_COLOR = '#FFFFFF'

const HeaderWrapper = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    color: ${PRIMARY_COLOR};
    background-color: ${SECONDARY_COLOR};
    padding: 30px 0;
    text-align: center;
    box-sizing: border-box;
    z-index: 999;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Travis Bumgarner</h1>
            <Nav />
        </HeaderWrapper>
    )
}

export default Header
