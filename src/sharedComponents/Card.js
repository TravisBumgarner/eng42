import styled from 'styled-components'
import React from 'react'

const CardWrapper = styled.div`
    margin: 0px auto;
`

const Card = ({ children }) => {
    return <CardWrapper>{children}</CardWrapper>
}

export default Card
