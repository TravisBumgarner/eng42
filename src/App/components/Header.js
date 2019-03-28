import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { Title } from 'SharedComponents'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};

    &:hover {
        color: ${TERTIARY_COLOR};
    }
`

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
            <StyledLink to="/">
                <Title size="large">Travis Bumgarner</Title>
            </StyledLink>
        </HeaderWrapper>
    )
}

export default Header
