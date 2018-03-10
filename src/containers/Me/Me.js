import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '../../components/Divider';
import Button from '../../components/Button';

import {
  MeWrapper,
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
      author: {name, link, description},
      loaded
    } = this.props;

    const formattedDescription = description.split('\n').map((p, idx) => <MeDescription key={idx}>{p}</MeDescription>);
    const aboutLinks = Object.values(link).map(l => <li key={l.name}><a href={l.src}>{l.name}</a></li>)


    return (
      <MeWrapper>
         <h1>{ name }</h1>
        <MeDescription>{ formattedDescription }</MeDescription>
        <ul>{ aboutLinks }</ul>
      </MeWrapper>
    )

  }
}

export default connect((state) => ({
  author: state.author.me,
  loaded: state.session.meta.loaded,
}), {

})(Me);
