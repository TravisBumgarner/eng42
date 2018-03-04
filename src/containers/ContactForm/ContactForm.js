import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      website: '',
      message: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert('aint it great this dont  work');
  };

  render() {
    return (
      <div>
        <TextField
          value={this.state.name}
          onChange={ this.handleChange }
          hintText='Full Name'
          id = 'name'
        />
        <TextField
          value={this.state.email}
          onChange={ this.handleChange }
          hintText='Email Address'
          id='email'
        />
        <TextField
          value={this.state.website}
          onChange={ this.handleChange }
          hintText='Website'
          id='website'
        />
        <TextField
          value={this.state.message}
          onChange={ this.handleChange }
          hintText='Message'
          id='message'
          multiLine
          rows={3}
        />
        <RaisedButton
        label='Submit'
        onClick={ this.handleSubmit }
        primary={ true }
        />
      </div>
    );
  }
}

export default connect((state) => ({
}), {

})(ContactForm);
