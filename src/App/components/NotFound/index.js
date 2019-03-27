import React, { Component } from 'react'

import { Card } from '../sharedComponents'

import { NotFoundWrapper } from './NotFound.styles'

export default class NotFound extends Component {
    render() {
        return (
            <NotFoundWrapper>
                <Card title="404 Error">
                    <p>Sorry, the page you were looking for was not found.</p>
                </Card>
            </NotFoundWrapper>
        )
    }
}
