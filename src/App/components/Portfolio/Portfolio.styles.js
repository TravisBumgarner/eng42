import styled from 'styled-components'

import { Card } from 'SharedComponents'

import { DEFAULT_PAGE_WRAPPER } from 'Theme'

const ProjectsCard = styled(Card)``

const ProjectCard = ProjectsCard.extend``

const PortfolioWrapper = DEFAULT_PAGE_WRAPPER.extend``

const ProjectsNoScrollWrapper = styled.div`
    position: absolute;
    transition: left 0.5s, opacity 0.5s;
    left: ${props => (props.isProjectOpen ? '-100vw' : '0')};
    opacity: ${props => (props.isProjectOpen ? '  float: left;0' : '1')};
    width: 100%;
    max-height: 90vh;
    overflow-y: scroll;
    box-sizing: border-box;
`

const ProjectNoScrollWrapper = ProjectsNoScrollWrapper.extend`
    left: ${props => (props.isProjectOpen ? ' 0' : '100vw')};
    opacity: ${props => (props.isProjectOpen ? '1' : '0')};
`

export {
    PortfolioWrapper,
    ProjectsCard,
    ProjectCard,
    ProjectsNoScrollWrapper,
    ProjectNoScrollWrapper
}
