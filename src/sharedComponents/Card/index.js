import React from 'react'

import { CardWrapper } from './Card.styles'

const Card = ({ children, className }) => {
    return <CardWrapper className={className}>{children}</CardWrapper>
}

export default Card
