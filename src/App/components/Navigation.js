import React from 'react'
import {
    FaTwitter as Twitter,
    FaLinkedinIn as LinkedIn,
    FaInstagram as Instagram
} from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { ExternalLink, Title } from 'SharedComponents'

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    display: inline;
    margin: 5px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};

    &:hover {
        color: ${TERTIARY_COLOR};
    }
`

const NavigationWrapper = styled.div`
    width: 100vw;
    margin: 15px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

const EXTERNAL_LINKS = [
    {
        href: 'https://blog.travisbumgarner.com',
        content: <span>Blog</span>
    },
    {
        href: 'https://travisbumgarner.photography',
        content: <span>Photography</span>
    },
    {
        href: 'https://twitter.com/travis_the_makr',
        content: <Twitter size="2em" />
    },
    {
        href: 'https://instagram.com/travis_the_maker',
        content: <Instagram size="2em" />
    },
    {
        href: 'https://www.linkedin.com/in/travisbumgarner/',
        content: <LinkedIn size="2em" />
    }
]

const Navigation = () => {
    const ExternalLinks = EXTERNAL_LINKS.map(l => (
        <Item key={l.href}>
            <ExternalLink href={l.href}>
                <Title size="medium">{l.content}</Title>
            </ExternalLink>
        </Item>
    ))

    return (
        <NavigationWrapper>
            <List>
                <Item>
                    <Title size="medium">
                        <StyledLink to="/">Portfolio</StyledLink>
                    </Title>
                </Item>
                {ExternalLinks}
            </List>
        </NavigationWrapper>
    )
}

export default Navigation
