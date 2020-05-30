import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    FaTwitter as Twitter,
    FaLinkedinIn as LinkedIn,
    FaInstagram as Instagram
} from 'react-icons/fa'

import { PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'
import { Title, ExternalLink } from 'SharedComponents'

const List = styled.div`
    display: flex;
    align-items: center;
`

const Item = styled.div`
    margin-left: 10px;

    ${media.tablet} {
        margin: 0 10px;
    }
`

const NavigationWrapper = styled.div`
    box - sizing: border - box;
    display: flex;
    justify - content: center;
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

const StyledLink = styled(Link)`
text - decoration: none;
color: ${ PRIMARY_COLOR};

    &: hover {
    color: ${ TERTIARY_COLOR};
}
`

const HeaderWrapper = styled.div`
justify - content: center;
justify - content: space - between;
display: flex;
margin - bottom: 40px;
${media.desktop} {
        margin: 20px 4vw;
    }

${media.tablet} {
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <StyledLink to="/">
                <Title size="large">Travis Bumgarner</Title>
            </StyledLink>
            <Navigation />
        </HeaderWrapper>
    )
}

export default Header
