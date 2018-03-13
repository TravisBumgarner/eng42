import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '../../components/Divider';
import Button from '../../components/Button';

import {
  IntroductionWrapper,
  IntroText,
  IntroHeader,
  IntroListItem,
  IntroList,
} from './Introduction.styles';

export class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: [],
    };
  }

  componentWillMount(){
    this.generateIntroMessage()
  }

  generateIntroMessage = () => {
    const {
      allSkills,
    } = this.props;

    const {
      selectedSkills,
    } = this.state;
    // TODO could write this as a selector?
    const newSelectedSkills = [...selectedSkills];

    let allSkillsKeys = Object.keys(allSkills);

    while (allSkillsKeys.length && newSelectedSkills.length < 3) {
      let i = allSkills[Math.floor(Math.random() * allSkillsKeys.length)].name;
      if (!newSelectedSkills.includes(i)) {
        newSelectedSkills.push(i);
      }
    }

    this.setState({ selectedSkills: newSelectedSkills })
  };

  render() {
    const {
      allSkills,
    } = this.props;

    const {
      selectedSkills,
    } = this.state;

    let skills = selectedSkills.map(s => {
      return <h2 key={s}>{s}</h2>
    });

    return (
      <IntroductionWrapper>
        <IntroHeader>
          Greetings,
        </IntroHeader>

        <Divider primary/>

        <IntroText>
          {`Are you looking for someone who can combine ${selectedSkills[0]},
            ${selectedSkills[1]}, and ${selectedSkills[2]} on a project?`}
        </IntroText>

        <IntroText>
          You've come to the right place! Let's grab a beer (or coffee), work, or volunteer together!
        </IntroText>

        <Divider primary/>
      </IntroductionWrapper>
    )

  }
}

export default connect((state) => ({
  allSkills: state.skill.all,
}), {

})(Introduction);
