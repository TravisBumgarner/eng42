import React from 'react'
import styled from 'styled-components'

import { Card } from 'SharedComponents'

const NotFoundWrapper = styled.div``

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
