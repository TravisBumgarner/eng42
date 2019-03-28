import React, { Component } from 'react'
import Twitter from 'react-icons/lib/fa/twitter'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Instagram from 'react-icons/lib/fa/instagram'

import { ExternalLink } from 'SharedComponents'
import { List, Item } from './Nav.styles'

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

const Nav = () => {
    const ExternalLinks = EXTERNAL_LINKS.map(l => (
        <Item key={l.text}>
            <ExternalLink href={l.href}>{l.content}</ExternalLink>
        </Item>
    ))

    return <List>{ExternalLinks}</List>
}

export default Nav
