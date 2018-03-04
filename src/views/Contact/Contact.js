import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../../containers/ContactForm';

export class Contact extends Component {

  render() {

    return (
      <div>
        <ContactForm />
      </div>
    )

  }
}

export default connect((state) => ({

}), {

})(Contact);
