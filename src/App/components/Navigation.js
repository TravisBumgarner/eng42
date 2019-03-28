import React, { Component } from 'react'
import Twitter from 'react-icons/lib/fa/twitter'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Instagram from 'react-icons/lib/fa/instagram'

import { ExternalLink } from 'SharedComponents'
import styled from 'styled-components'

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    display: inline;
    margin: 5px;
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
            <ExternalLink href={l.href}>{l.content}</ExternalLink>
        </Item>
    ))

    return (
        <NavigationWrapper>
            <List>{ExternalLinks}</List>
        </NavigationWrapper>
    )
}

export default Navigation
