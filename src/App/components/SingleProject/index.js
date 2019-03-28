import React from 'react'

import { Details } from './components'

import { SingleProjectWrapper } from './SingleProject.styles'

const SingleProject = ({
    projects,
    match: {
        params: { id }
    }
}) => {
    return (
        <SingleProjectWrapper>
            <Details project={Object.values(projects).filter(project => (project.id = id))[0]} />
        </SingleProjectWrapper>
    )
}

export default SingleProject
