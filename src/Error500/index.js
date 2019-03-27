import React, { Component } from 'react'

import { Card } from '../sharedComponents'

import { Error500Wrapper } from './Error500.styles'

export default class Error500 extends Component {
    render() {
        return (
            <Error500Wrapper>
                <Card title="500 Error">
                    <p>Sorry, there was an error, please try again later.</p>
                </Card>
            </Error500Wrapper>
        )
    }
}
