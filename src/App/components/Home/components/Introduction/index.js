import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'SharedComponents'
import { IntroText, SkillText } from './Introduction.styles'

export class Introduction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedSkills: [],
            secondsElapsed: 0,
            unselectedSkills: Object.values(props.allSkills).map(s => s.name)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.generateIntroMessage(false), 2500)
        this.generateIntroMessage(true)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    generateIntroMessage = isInitialLoad => {
        const { selectedSkills, unselectedSkills } = this.state

        const newSelectedSkills = [...selectedSkills]
        const newUnselectedSkills = [...unselectedSkills]

        // Remove one of not initial load
        const randSkillIdx = Math.floor(Math.random() * newSelectedSkills.length)
        if (!isInitialLoad) {
            newUnselectedSkills.push(newSelectedSkills[randSkillIdx])
            newSelectedSkills.splice(randSkillIdx, 1)
        }

        while (newSelectedSkills.length < 3) {
            const newRandSkillIdx = Math.floor(Math.random() * newUnselectedSkills.length)
            if (isInitialLoad) {
                newSelectedSkills.push(newUnselectedSkills[newRandSkillIdx])
            } else {
                newSelectedSkills.splice(randSkillIdx, 0, newUnselectedSkills[newRandSkillIdx])
            }
            newUnselectedSkills.splice(randSkillIdx, 1)
        }
        this.setState({
            selectedSkills: newSelectedSkills,
            unselectedSkills: newUnselectedSkills
        })
    }

    render() {
        const { selectedSkills } = this.state
        return (
            <Card title="Greetings,">
                <IntroText>
                    Are you looking for someone who can combine{' '}
                    <SkillText>{selectedSkills[0]}</SkillText>,{' '}
                    <SkillText>{selectedSkills[1]}</SkillText>, and{' '}
                    <SkillText>{selectedSkills[2]}</SkillText> on a project?
                </IntroText>

                <IntroText>
                    You've come to the right place! Let's grab a beer (or coffee), work, or
                    volunteer together!
                </IntroText>
            </Card>
        )
    }
}

export default connect(
    state => ({
        allSkills: state.skill.all
    }),
    {}
)(Introduction)
