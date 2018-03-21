import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

import {
  MeDescription,
} from './Me.styles';

export class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: [],
    };
  }

  render() {
    const {
      author: {
        name,
        description
      },
    } = this.props;

    const formattedDescription = description.split('\n').map((p, idx) => <MeDescription key={idx}>{p}</MeDescription>);

    return (
      <div>
        <Card title={ `${name}` }>
          <MeDescription>{ formattedDescription }</MeDescription>
        </Card>
      </div>
    )
  }
}

export default connect((state) => ({
  author: state.author.me,
  loaded: state.session.meta.loaded,
}), {

})(Me);
