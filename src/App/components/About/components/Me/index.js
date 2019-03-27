import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paragraph from '../../components/Paragraph';

import {
  MeCard,
  MeNoScrollWrapper,
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

    const formattedDescription = description.split('\n').map((p, idx) => <Paragraph key={idx}>{p}</Paragraph>);

    return (
      <div>
        <MeNoScrollWrapper>
          <MeCard title={ `${name}` }>
            { formattedDescription }
          </MeCard>
        </MeNoScrollWrapper>
      </div>
    )
  }
}

export default connect((state) => ({
  author: state.author.me,
  loaded: state.session.meta.loaded,
}), {

})(Me);
