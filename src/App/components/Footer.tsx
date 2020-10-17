import React from 'react'
import styled from 'styled-components'

import { Navigation } from './'

const FooterWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 40px;
    margin-left: 5px;
    margin-right: 5px;
   
`


const Footer = () => {
    return (
        <FooterWrapper>
            <Navigation />
        </FooterWrapper>
    )
}

export default Footer
