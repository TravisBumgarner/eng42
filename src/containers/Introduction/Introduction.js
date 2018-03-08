import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROUTES } from "../../utilities/constants";

import {
  RoutesList,
  ListItem,
  ItemLink,
  IntroductionWrapper,
  FirstName,
  LastName,
  ContentWrapper,
  MyPortrait,
  NameImgWrapper,
} from './Introduction.styles';

export class Home extends Component {
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
        <p>{`Are you looking for someone who can combine ${selectedSkills[0]}, ${selectedSkills[1]}, and ${selectedSkills[2]} on a project?`}</p>
        <p>You've come to the right place! Let's meet up, work, or volunteer together!</p>
      </IntroductionWrapper>
    )

  }
}

export default connect((state) => ({
  allSkills: state.skill.all,
}), {

})(Home);
