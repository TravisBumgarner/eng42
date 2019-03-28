import React from 'react'

import { TitleWrapper } from './Title.styles'

const Title = ({ children, size }) => {
    return <TitleWrapper size={size}>{children}</TitleWrapper>
}

export default Title
