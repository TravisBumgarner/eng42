import React from 'react'

import { Card } from 'SharedComponents'

import { Grid } from './components'

const Portfolio = ({ projects }) => {
    return (
        <Card>
            <Grid projects={projects} />
        </Card>
    )
}

export default Portfolio
