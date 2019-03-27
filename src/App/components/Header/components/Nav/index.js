import React, { Component } from 'react'
import Twitter from 'react-icons/lib/fa/twitter'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Instagram from 'react-icons/lib/fa/instagram'

import { ExternalLink } from 'SharedComponents'
import { SiteLink, List, Item, activeSiteLink } from './Nav.styles'

const INTERNAL_LINKS = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Portfolio',
        to: '/portfolio'
    },
    {
        text: 'About',
        to: '/about'
    }
]
const EXTERNAL_LINKS = [
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
    const InternalLinks = INTERNAL_LINKS.map(l => (
        <SiteLink key={l.text} exact activeStyle={activeSiteLink} to={l.to}>
            {l.text}
        </SiteLink>
    ))
    const ExternalLinks = EXTERNAL_LINKS.map(l => (
        <ExternalLink key={l.text} href={l.href}>
            {l.content}
        </ExternalLink>
    ))

    const Links = [...InternalLinks, ...ExternalLinks].map(e => <Item>{e}</Item>)

    return <List>{Links}</List>
}

export default Nav

// export default class Nav extends Component {
//     render() {
//         return (
//             <SiteLinkList>
//                 <SiteLinkItem>
//                     <SiteLink exact activeStyle={activeSiteLink} to="/">
//                         Home
//                     </SiteLink>
//                 </SiteLinkItem>
//                 <SiteLinkItem>
//                     <SiteLink activeStyle={activeSiteLink} to="/portfolio">
//                         Portfolio
//                     </SiteLink>
//                 </SiteLinkItem>
//                 <SiteLinkItem>
//                     <SiteLink activeStyle={activeSiteLink} to="/about">
//                         About
//                     </SiteLink>
//                 </SiteLinkItem>
//                 <SiteLinkItem>
//                     <SiteLink activeStyle={activeSiteLink} to="/learn_more">
//                         Photography
//                     </SiteLink>
//                 </SiteLinkItem>
//                 <SiteLinkItem>
//                     <ExternalLink
//                         activeStyle={activeSiteLink}
//                         href="https://twitter.com/travis_the_makr"
//                     >
//                         <Twitter size="2em" />
//                     </ExternalLink>
//                 </SiteLinkItem>
//                 <SiteLinkItem>
//                     <ExternalLink
//                         activeStyle={activeSiteLink}
//                         href="https://www.linkedin.com/in/travisbumgarner/"
//                     >

//                     </ExternalLink>
//                 </SiteLinkItem>
//             </SiteLinkList>
//         )
//     }
// }
