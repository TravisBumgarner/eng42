import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from 'SharedComponents'

const HeaderWrapper = styled.div`
    width: 100vw;
    margin: 15px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Title size="large">Travis Bumgarner</Title>
        </HeaderWrapper>
    )
}

export default Header
