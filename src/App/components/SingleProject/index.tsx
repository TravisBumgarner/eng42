import React from 'react'
import styled from 'styled-components'

import { Details } from './components'
import { media } from 'Theme'
import { Project } from '../../../content'

type SingleProjectProps = {
    projects: Project[]
}

const SingleProjectWrapper = styled.div`
    justify-content: space-between;
    display: flex;

    ${media.desktop`
        margin: 20px 4vw;
    `}
`

const SingleProject = ({
    projects,
    match: {
        params: { id }
    }
}: SingleProjectProps) => {
    if (!Object.keys(projects).length) {
        return null
    }
    const project = projects.filter(project => project.id == id)[0]
    return (
        <SingleProjectWrapper>
            <Details project={project} />
        </SingleProjectWrapper>
    )
}

export default SingleProject
