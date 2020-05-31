import React from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTop = ({ location }: any) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)

    }, [location])

    return <div />
}

export default withRouter(ScrollToTop)