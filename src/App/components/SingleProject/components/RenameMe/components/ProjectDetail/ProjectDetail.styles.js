import styled from 'styled-components'

import { FONT_FAMILY_HEADER, FONT_WEIGHT_HEADER, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const ProjectDetailWrapper = styled.div`
    margin: 10px 0;
    width: 100%;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${TERTIARY_COLOR};
    margin-bottom: 10px;
`

const Title = styled.h2`
    margin: 0 0 5px 0;
    font-weight: ${FONT_WEIGHT_HEADER};
    font-family: ${FONT_FAMILY_HEADER};
`
const ContentWrapper = styled.span`
    font-weight: 100;
    margin: 10px 0;
`

export { ProjectDetailWrapper, ContentWrapper, Divider, Title }
