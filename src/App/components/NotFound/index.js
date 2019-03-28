import React, { Component } from 'react'
import styled from 'styled-components'

import { Card } from 'SharedComponents'

import { DEFAULT_PAGE_WRAPPER } from 'Theme'

const NotFoundWrapper = styled(DEFAULT_PAGE_WRAPPER)``

export { NotFoundWrapper }

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <Card title="404 Error">
                <p>Sorry, the page you were looking for was not found.</p>
            </Card>
        </NotFoundWrapper>
    )
}

export default NotFound
