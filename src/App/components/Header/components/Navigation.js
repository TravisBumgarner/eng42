import React from 'react'
import {
    FaTwitter as Twitter,
    FaLinkedinIn as LinkedIn,
    FaInstagram as Instagram
} from 'react-icons/fa'
import styled from 'styled-components'

import { ExternalLink } from 'SharedComponents'

const List = styled.div`
    display: flex;
    align-items: center;
`

const Item = styled.div`
    margin: 10px;
`

const NavigationWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

const EXTERNAL_LINKS = [
    {
        href: 'https://blog.travisbumgarner.com',
        content: 'Blog'
    },
    {
        href: 'https://travisbumgarner.photography',
        content: 'Photography'
    },
    {
        href: 'https://twitter.com/travis_the_makr',
        content: <Twitter size="1em" />
    },
    {
        href: 'https://instagram.com/travis_the_maker',
        content: <Instagram size="1em" />
    },
    {
        href: 'https://www.linkedin.com/in/travisbumgarner/',
        content: <LinkedIn size="1em" />
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
