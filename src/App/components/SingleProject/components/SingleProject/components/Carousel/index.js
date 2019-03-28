import React, { Component } from 'react'

import { CarouselWrapper, ActiveImage, NextButton, PrevButton, ICON_SIZE } from './Carousel.styles'

export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIdx: 0,
            images: [],
            maxIdx: 0
        }
    }

    componentWillMount() {
        const { images } = this.props

        this.setState({
            images: Object.values(images),
            maxIdx: Object.values(images).length - 1
        })
    }

    prevImage = () => {
        const { activeIdx, maxIdx } = this.state

        const newActiveIdx = activeIdx === 0 ? maxIdx : activeIdx - 1
        this.setState({ activeIdx: newActiveIdx })
    }

    nextImage = () => {
        const { activeIdx, maxIdx } = this.state

        const newActiveIdx = activeIdx === maxIdx ? 0 : activeIdx + 1
        this.setState({ activeIdx: newActiveIdx })
    }

    render() {
        const { images, activeIdx, maxIdx } = this.state

        return (
            <CarouselWrapper>
                <ActiveImage src={images[activeIdx].src} alt={images[activeIdx].alt} />
                {maxIdx > 0 && <PrevButton onClick={this.prevImage} size={ICON_SIZE} />}
                {maxIdx > 0 && <NextButton size={ICON_SIZE} onClick={this.nextImage} />}
            </CarouselWrapper>
        )
    }
}
