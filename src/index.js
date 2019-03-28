import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as Sentry from '@sentry/browser'

import { Error } from './sharedComponents'
import App from './App'
import store from './store'
import { muiTheme } from './theme'

Sentry.init({
    dsn: 'https://96b0481bcf204abfaec06fb7ffc59ed8@sentry.io/1315175'
})

class SentryWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error })
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key])
            })
            Sentry.captureException(error)
        })
    }

    render() {
        if (this.state.error) {
            return <Error500 />
        } else {
            return this.props.children
        }
    }
}

ReactDOM.render(
    <SentryWrapper>
        <Provider store={store}>
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <App />
                </MuiThemeProvider>
            </BrowserRouter>
        </Provider>
    </SentryWrapper>,
    document.getElementById('root')
)
