import styled from 'styled-components'

import { Card } from 'SharedComponents'

import { FONT_SIZE_LARGE } from 'Theme'

const MeCard = styled(Card)``

const MeNoScrollWrapper = styled.div`
    width: 100%;
    max-height: 90vh;
    overflow-y: scroll;
    box-sizing: border-box;
`

export { MeCard, MeNoScrollWrapper }
