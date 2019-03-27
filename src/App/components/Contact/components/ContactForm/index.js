import React, { Component } from 'react'
import { connect } from 'react-redux'

import requestActions from '../../../../../store/request/actions'
import notificationActions from '../../../../../store/notification/actions'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { Card } from 'SharedComponents'

export class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            website: '',
            message: '',
            email: '',
            isNotification: false,
            notificationMessage: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {
        const { apiPost, createNotification } = this.props

        const { name, website, message, email } = this.state

        if (!name.length || !message.length || !email.length) {
            createNotification('Your name, email, and a message are required.')
        } else {
            const data = {
                name,
                website,
                message,
                email
            }

            apiPost('/contact/', data)
        }
    }

    render() {
        const {} = this.state
        return (
            <Card title="Let's Chat">
                <TextField
                    fullWidth
                    value={this.state.name}
                    onChange={this.handleChange}
                    hintText="Full Name"
                    id="name"
                />
                <TextField
                    fullWidth
                    value={this.state.email}
                    onChange={this.handleChange}
                    hintText="Email Address"
                    id="email"
                />
                <TextField
                    fullWidth
                    value={this.state.website}
                    onChange={this.handleChange}
                    hintText="Website (Optional)"
                    id="website"
                />
                <TextField
                    fullWidth
                    value={this.state.message}
                    onChange={this.handleChange}
                    hintText="Message"
                    id="message"
                    multiLine
                    rows={3}
                />
                <RaisedButton fullWidth label="Submit" onClick={this.handleSubmit} primary={true} />
            </Card>
        )
    }
}

export default connect(
    state => ({}),
    {
        apiPost: requestActions.apiPost,
        createNotification: notificationActions.createNotification
    }
)(ContactForm)
