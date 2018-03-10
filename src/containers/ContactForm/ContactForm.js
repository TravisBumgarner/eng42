import React, { Component } from 'react';
import { connect } from 'react-redux';

import requestActions from '../../store/request/actions';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {
  ContactFormWrapper
} from './ContactForm.styles';

export class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'd',
      website: 'd',
      message: 'd',
      email: 'd',
      isNotification: false,
      notificationMessage: '',
    };
  }

  handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const {
      apiPost,
    } = this.props;

    const {
      name,
      website,
      message,
      email
    } = this.state;

    if (!name.length || !message.length || !email.length){
      this.setState({
        isNotification: true,
        notificationMessage: "Your name, email, and a message are required."
      })
    } else {
      const data = {
        name,
        website,
        message,
        email,
      };

      apiPost('/contact/', data).then(r => console.log('response', r)).catch(e => console.log(e));
    }

  };

  render() {
    const {
      isNotification,
      notificationMessage,
    } = this.state;
    console.log(requestActions);
    return (
      <ContactFormWrapper>
        <TextField
          fullWidth
          value={this.state.name}
          onChange={ this.handleChange }
          hintText='Full Name'
          id = 'name'
        />
        <TextField
          fullWidth
          value={this.state.email}
          onChange={ this.handleChange }
          hintText='Email Address'
          id='email'
        />
        <TextField
          fullWidth
          value={this.state.website}
          onChange={ this.handleChange }
          hintText='Website'
          id='website'
        />
        <TextField
          fullWidth
          value={this.state.message}
          onChange={ this.handleChange }
          hintText='Message'
          id='message'
          multiLine
          rows={3}
        />
        <RaisedButton
          fullWidth
          label='Submit'
          onClick={ this.handleSubmit }
          primary={ true }
        />
      </ContactFormWrapper >
    );
  }
}

export default connect((state) => ({
}), {
  apiPost: requestActions.apiPost,
})(ContactForm);
