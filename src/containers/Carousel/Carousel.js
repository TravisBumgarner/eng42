import React, { Component } from 'react';

import {
  CarouselWrapper,
  ActiveImage,
  NextButton,
  PrevButton,
  ICON_SIZE,
} from "./Carousel.styles";

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIdx: -1,
      images: [],
      maxIdx: -1,
    }
  }

  componentWillMount(){
    const {
      images,
    } = this.props;

    this.setState({
      images: Object.values(images),
      activeIdx: 0,
      maxIdx: Object.values(images).length,
    });
  }

  componentWillReceiveProps(nextProps){
    const {
      images,
    } = nextProps;

    this.setState({
      images: Object.values(images),
      activeIdx: 0,
      maxIdx: Object.values(images).length - 1,
    });
  }

  prevImage = () => {
    const {
      activeIdx,
      maxIdx,
    } = this.state;

    const newActiveIdx = activeIdx === 0 ? maxIdx : activeIdx - 1;

    this.setState({ activeIdx: newActiveIdx })
  };

  nextImage = () => {
    const {
      activeIdx,
      maxIdx,
    } = this.state;

    const newActiveIdx = activeIdx === maxIdx ? 0 : activeIdx + 1;

    this.setState({ activeIdx: newActiveIdx })
  };

  render() {
    const {
      images,
      activeIdx,
      isNextDisabled,
      maxIdx,
      isPrevDisabled,
    } = this.state;

    return (
      <CarouselWrapper>
        {(maxIdx > 0) &&
          <PrevButton
            onClick={isPrevDisabled ? null : this.prevImage}
            size={ICON_SIZE}
          />
        }
        {(maxIdx > 0) &&
          < NextButton
            size={ICON_SIZE}
            onClick={isNextDisabled ? null : this.nextImage}
          />
        }
        <ActiveImage
          src={ images[activeIdx].src }
          alt={ images[activeIdx].alt }
        />
      </CarouselWrapper>
    )
  }
}
