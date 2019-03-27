import styled from 'styled-components'

import { transparentize } from 'polished'

import { FONT_FAMILY_HEADER, SECONDARY_COLOR, media, PRIMARY_COLOR } from 'Theme'

const SPACE_BETWEEN = 5

const ProjectTileWrapper = styled.div`
    float: left;
    box-sizing: border-box;
    margin: ${SPACE_BETWEEN}px;
    align-items: flex-end;
    justify-content: center;

    border: 1px solid ${PRIMARY_COLOR};

    &:hover {
        cursor: pointer;
    }
`

const ProjectDescription = styled.div`
    background-color: ${transparentize(0.3, PRIMARY_COLOR)};
    font-family: ${FONT_FAMILY_HEADER};
    padding: 10px;
    width: 100%;
    color: ${SECONDARY_COLOR};
`

export { ProjectTileWrapper, ProjectDescription }
