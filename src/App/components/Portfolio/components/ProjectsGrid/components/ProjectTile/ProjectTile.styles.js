import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { transparentize } from 'polished'

import { FONT_FAMILY_HEADER, SECONDARY_COLOR, media, PRIMARY_COLOR } from 'Theme'

const ProjectTileWrapper = styled.div``

const SiteLink = styled(NavLink)``

const ProjectDescription = styled.div`
    background-color: ${transparentize(0.3, PRIMARY_COLOR)};
    font-family: ${FONT_FAMILY_HEADER};
    padding: 10px;
    width: 100%;
    color: ${SECONDARY_COLOR};
`

export { ProjectTileWrapper, ProjectDescription, SiteLink }
