import React from 'react'
import styled from 'styled-components'

import { Card } from 'SharedComponents'

const ErrorWrapper = styled.div``

const Error = () => {
    return (
        <ErrorWrapper>
            <Card title="Error">
                <p>Sorry, there was an error, please try again later.</p>
            </Card>
        </ErrorWrapper>
    )
}

export default Error
