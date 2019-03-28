import React, { Component } from 'react'

import { Card } from 'SharedComponents'

import { ErrorWrapper } from './Error.styles'

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
